import React from 'react';
import { useRouter } from 'next/router';
import '@/styles/globalStyles.css';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import  Link from 'next/link';
import withAuth from '@/utils/withAuth';

const register = () => {
  const router = useRouter();

  const handleRegistration = async(values) => {
    try {
      await axios.post("http://localhost:3001/auth/register", values);
      router.push('/log-in');
    } catch (error) {
      console.error('Error creating a user: ', error);
    }
  }
  
  
  return (


    <div className='hero min-h-screen bg-main'>
      <div className='hero-content'>
        <div className='flex gap-24'>
          <div id='left-side' className='flex justify-center items-center'>
              <img src='/girl_laptop.svg' />
          </div>


          <div id='right-side' className='flex justify-center flex-col gap-4 min-w-96 '>
            <div id='top-navbar' className='flex flex-col gap-5 text-center'>
              <h1 className='font-bold text-6xl'>Join Us</h1>
              
              <div className='flex gap-4 text-center justify-center'>
              <p>Already have an Account? </p>
              <Link href='/log-in' className='text-action'>Log In</Link>
              </div>
              
            </div>

            <Formik
              initialValues={{
                username: '',
                email: '',
                confirmEmail: '',
                password: '',
              }}

              validationSchema={
                Yup.object().shape({
                  username: Yup.string().required('This field should be filled').min(5, "Username should be longer than 5 characters").max(15, "Username should be less than 15 characters long"),
                  email: Yup.string().required("This field should be filled").email("Please enter a valid email address"),
                  confirmEmail: Yup.string().required("This field should be filled").oneOf([Yup.ref('email'), null], "Emails must match"),
                  password: Yup.string().required("This field should be filled").min(6, 'Password should be longer than 6 characters long') ,

                })}

              onSubmit={handleRegistration}
              


            >
              <Form id='bottom-sign-up' className='flex flex-col gap-4'>
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <Field type="text" className="grow" placeholder="Username" name='username' />
              </label>
              <ErrorMessage name='username' component='div' className='text-sm text-error'/>


              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <Field type="text" className="grow" placeholder="Email" name='email' />
              </label>
              <ErrorMessage name='email' component='div' className='text-sm text-error' />



              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <Field type="text" className="grow" placeholder="Confirm Email" name='confirmEmail'/>
              </label>
              <ErrorMessage name='confirmEmail' component='div' className='text-sm text-error'/>
              

              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <Field type="password" className="grow" placeholder="Password" name='password' />
              </label>
              <ErrorMessage name='password' component='div' className='text-sm text-error'/>



              <div className="form-control mt-6">
                  <button type="submit" className="btn bg-action text-main" >
                    Create
                  </button>
              </div>

              </Form>
              



            </Formik>

            
          </div>
        </div>

        
      </div>


    </div>
  );
}


export default withAuth(register);
