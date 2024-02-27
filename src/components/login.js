import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MyLogin() {
  return (
    <section className=' '>
      <div className=' text-[#0A296C]   flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0'>
        <div className='w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 '>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className=' text-[#0A296C] text-xl font-bold leading-tight tracking-tight  md:text-2xl '>
              Sign in to your account
            </h1>
            <p>Proin sed odio laoreet</p>

            <form className='space-y-4 md:space-y-6 ' action='#'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium '>
                  E posta
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                  placeholder='name@company.com'
                  required=''
                />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium  '>
                  Şifreniz
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                  required=''
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'></div>
                <a href='#' className='text-sm font-medium  hover:underline '>
                  Forgot password?
                </a>
              </div>
              <Link href={'/'}>
                <button className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                  Giriş Yap
                </button>
              </Link>

              <div className='flex flex-col items-center'>
                {' '}
                <p className='flex flex-row items-center text-sm font-light '>
                  Hesabın Yok mu?
                  <Link href='#' className='font-medium hover:underline '>
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
