'use client';
import { useEffect } from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

export default function CreateBlog() {
    useEffect(() => {
        axios.get("http://localhost:3001/blog").then((response) =>{
            console.log(response);
        });
    });
        
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    

                    <Formik
                        initialValues={{
                            username: '',
                            blogTitle:'',
                            blogText: '',
                            blogImage: ''

                        }}

                        validationSchema={
                            Yup.object().shape({
                                username: Yup.string().required('This field is required').min(4, 'Username should be longer than 4 characters'),
                                blogTitle: Yup.string().required('This field is required').min(3, 'Blog Title should be longer than 3 characters'),
                                blogText: Yup.string().required('This field is required').min(15, 'The Blog Text should have 15+ letters').max(100, 'This field cannot contain more than 100 letters'),
                                blogImage: Yup.string().required('This field is required')

                            })
                        }

                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            axios.post('http://localhost:3001/blog', values)
                            .then(response => {
                                console.log("Blog Post Created:" + response);
                                resetForm();
                            })
                            .catch(error => {
                                console.log("Error Creating a blog Post" ,error); 
                            })
                            .finally(() => {
                                setSubmitting(false);
                            })
                        }} >

                        {({ isSubmitting }) => (
                            <Form className="card-body">
                                <div className='flex justify-center text-4xl text-center font-semibold mb-4'>
                                    <h1>Create A Blog Post</h1>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                      <span className="label-text">Username</span>
                                    </label>
                                    <Field type="username" name="username" placeholder="Username" className="input input-bordered" required />
                                    <ErrorMessage name="username" component="div" className="text-sm text-error" />
                                  </div>

                                <div className="form-control">
                                    <label className="label">
                                      <span className="label-text">Set Blog Title</span>
                                    </label>
                                    <Field type="text" name="blogTitle" placeholder="Blog Title" className="input input-bordered" required />
                                    <ErrorMessage name="blogTitle" component="div" className="text-sm text-error" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                      <span className="label-text">Blog Text</span>
                                    </label>
                                    <Field type="text" name="blogText" placeholder="Blog Text" className="input input-bordered" required />
                                    <ErrorMessage name="blogText" component="div" className="text-sm text-error" />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                      <span className="label-text">Blog Image</span>
                                    </label>
                                    <Field type="text" name="blogImage" placeholder="Blog Image e.g https://image.co/url.png" className="input input-bordered" required />
                                    <ErrorMessage name="blogText" component="div" className="text-sm text-error" />
                                </div>


                                  <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-action text-main" disabled={isSubmitting}>
                                      {isSubmitting ? 'Submitting' : 'Create'}
                                    </button>
                                  </div>
                            </Form>
                        )}

                    

                    </Formik>
                </div>
            </div>
        </div>
    );
}