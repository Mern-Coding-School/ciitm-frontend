import React from 'react';
import { Link } from 'react-router-dom';
import Google_Wrapper from './Google_Wrapper';
import Input from './Input';
import signupImage from '../../assets/images/signup.png';
import logo from '../../assets/logo.svg';
const Signup = () => {
   return (
      <section className='w-full min-h-screen flex max-[999px]:flex-col'>
         <div className='left w-1/2 max-[999px]:hidden h-full'>
            <img
               className='w-full h-full object-cover pointer-events-none'
               src={signupImage}
               alt='Signup Illustration'
            />
         </div>
         
         <div className='right w-1/2 max-[999px]:w-full h-full max-[999px]:px-6 max-[999px]:pt-[50vw] pt-32 px-16 flex flex-col items-start justify-center text-[#333]'>
            <form className='w-full h-full bg-[#FAFAFA] p-6'>
               <div className='logo mb-6'>
                  <img src={logo} alt='CIITM Logo' className='h-8' />
               </div>
               
               <h1 className='heading text-[1.8vw] max-[999px]:text-[4.5vw] font-semibold mb-6'>
                  Let's Go Started Together
               </h1>
               
               <div className='w-full flex items-center justify-between gap-7'>
                  <Input 
                     type='text'
                     placeholder='First Name'
                     id='firstName'
                  />
                  <Input 
                     type='text'
                     placeholder='Last Name'
                     id='lastName'
                  />
               </div>
               
               <Input 
                  type='email'
                  placeholder='Enter your Email'
                  id='email'
               />
               
               <Input 
                  type='password'
                  placeholder='Create Password'
                  id='createPassword'
               />
               
               <Input 
                  type='password'
                  placeholder='Confirm Password'
                  id='confirmPassword'
               />
               
               <div className='flex w-full items-center justify-center gap-6 max-[999px]:gap-4 my-2 max-[999px]:flex-col'>
                  <button className='bg-[#333] text-white font-medium rounded-lg p-3.5 w-1/2 text-[1vw] max-[999px]:text-[3vw] max-[999px]:w-full'>
                     Sign Up
                  </button>
                  <button className='bg-[#333] text-white font-medium rounded-lg p-3.5 w-1/2 text-[1vw] max-[999px]:text-[3vw] max-[999px]:w-full'>
                     <Google_Wrapper text='Sign up with Google' />
                  </button>
               </div>
               
               <p className='mt-4 text-[0.85vw] max-[999px]:text-[2.5vw] font-semibold'>
                  Already have an account?{' '}
                  <Link to='/login' className='text-[#B83D00]'>
                     Login
                  </Link>
               </p>
            </form>
         </div>
      </section>
   );
};

export default Signup;