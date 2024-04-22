'use client';
import { useEffect } from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

export default function CreateUser() {
    
        
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    

                    <Formik
                        initialValues={{
                            username: '',
                            password:'',
                            email: '',
                            role: ''

                        }}

                        validationSchema={
                            Yup.object().shape({
                                username: Yup.string().required('This field is required').min(4, 'Username should be longer than 4 characters'),
                                password: Yup.string().required('This field is required').min(3, 'Blog Title should be longer than 3 characters'),
                                email: Yup.string().required('This field is required').min(15, 'The Blog Text should have 15+ letters').max(100, 'This field cannot contain more than 100 letters'),
                                role: Yup.string().required('This field is required')

                            })
                        }

                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            axios.post('http://localhost:3001/auth/createuser', values)
                            .then(response => {
                                console.log("User has been Created:" + response);
                                resetForm();
                            })
                            .catch(error => {
                                console.log("Error Creating a User in the database" ,error); 
                            })
                            .finally(() => {
                                setSubmitting(false);
                            })
                        }} >

                        {({ isSubmitting }) => (
                            <Form className="card-body">
                                <div className='flex justify-center text-4xl text-center font-semibold mb-4'>
                                    <h1>Create A New User</h1>
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
                                      <span className="label-text">Set User Email</span>
                                    </label>
                                    <Field type="text" name="email" placeholder="Email" className="input input-bordered" required />
                                    <ErrorMessage name="email" component="div" className="text-sm text-error" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                      <span className="label-text">Set User Password</span>
                                    </label>
                                    <Field type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                    <ErrorMessage name="password" component="div" className="text-sm text-error" />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                      <span className="label-text">Set User Role</span>
                                    </label>
                                    <Field type="text" name="role" placeholder="admin or user" className="input input-bordered" required />
                                    <ErrorMessage name="role" component="div" className="text-sm text-error" />
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