import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Login',
  description: 'Login',
};

export default function Login({ children }) {
  return (
    <>
      <div className='  '>
        <header className='bg-white p-8 flex justify-end items-center mr-36 '>
          <nav>
            <ul className='flex space-x-12'>
              <li>
                <Link href='/'>
                  <p className='text-gray-800 hover:text-gray-600'>Anasayfa</p>
                </Link>
              </li>
              <li>
                <Link href='/iletisim'>
                  <p className='text-gray-800 hover:text-gray-600'>İletişim</p>
                </Link>
              </li>
            </ul>
          </nav>
        </header>{' '}
        <main className='  flex flex-col  overflow-hidden     '>{children}</main>
      </div>
    </>
  );
}
