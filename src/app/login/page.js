'use client';

import MyLogin from '@/components/login';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <main className='flex   flex-col  '>
      <div className='flex flex-row'>
        <div className='max-sm:w-screen  w-1/2    '>
          <MyLogin></MyLogin>
        </div>
        <div className=' max-sm:hidden bg-[#F6F6F6]  w-1/2  relative      '>
          <Image className='absolute  ' src={'/bgimage.png'} alt='asd' width={770} height={1500}></Image>
          <Image
            className='absolute bottom-0 right-0 pt-24 pl-32 w-full h-full'
            src={'/unsplash.png'}
            alt='asd'
            width={290}
            height={1500}
          ></Image>
        </div>
      </div>
    </main>
  );
}
