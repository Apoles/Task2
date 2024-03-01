'use client';

import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link.js';
import Image from 'next/image.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { MyButtonLinked, MyButtonWithIcon } from '@/components/button';

export default function App() {
  const [collapse, setCollapse] = useState(false);

  console.log('asda', collapse);
  return (
    <navbar className=' w-full flex flex-col'>
      <div className='  max-sm:flex-col max-sm:items-center max-sm:justify-center  flex flex-row items-center justify-between px-4 py-6  w-full max-w-7xl mx-auto'>
        <div className='flex flex-row lg:hidden items-center justify-between w-full mb-5'>
          <button onClick={() => setCollapse(!collapse)}>
            <FontAwesomeIcon icon={faBars} className={'text-lg'} />
          </button>
        </div>

        <div className='md:flex md:justify-between md:items-center md:w-full    '>
          <div className={`flex gap-4  max-sm:mb-5 font-medium text-base md:space-x-4 max-sm:hidden `}>
            <div>
              <Link href='#' aria-current='page'>
                Anasayfa
              </Link>
            </div>
            <div>
              <Link color='foreground' href='#'>
                Bireysel
              </Link>
            </div>
            <div>
              <Link color='foreground' href='#'>
                Kurumsal
              </Link>
            </div>
            <div>
              <Link color='foreground' href='#'>
                İletişim
              </Link>
            </div>
          </div>

          <div className={`${collapse ? 'flex' : 'hidden'}  gap-4  max-sm:mb-5 font-medium text-base `}>
            <div>
              <Link href='#' aria-current='page'>
                Anasayfa
              </Link>
            </div>
            <div>
              <Link color='foreground' href='#'>
                Bireysel
              </Link>
            </div>
            <div>
              <Link color='foreground' href='#'>
                Kurumsal
              </Link>
            </div>
            <div>
              <Link color='foreground' href='#'>
                İletişim
              </Link>
            </div>
          </div>

          <div className='  flex flex-row items-center space-x-8'>
            <a
              className='rounded-md bg-white text-[#0A296C] border-[#D0D5DD] hover:bg-[#2445D8] hover:text-white transition-all border px-6 py-3.5 font-semibold text-base'
              href='#'
            >
              Giriş Yap
            </a>

            <a
              className='rounded-md font-semibold text-base px-6 py-3.5 bg-[#2445D8] text-white hover:bg-[#2445D8]/90 transition-all'
              color='primary'
              href='#'
            >
              Hemen başvur
            </a>
          </div>
        </div>
      </div>

      <div className='header-bg py-36'>
        <div className='max-w-7xl mx-auto px-4 max-md:pl-8 '>
          <div className={'grid grid-cols-2'}>
            <div className='text-white  max-md:w-80  space-y-8'>
              <h1 className='text-5xl font-bold max-md:text-4xl  '>Suscipit duis faucibus vestibulum fusce amet.</h1>
              <p className='text-base  opacity-80 font-medium'>
                Scelerisque eu integer dolor faucibus nunc quam auctor sed. <br />
                Vulputate vulputate turpis convallis nibh donec arcu mauris.
              </p>
              <div className='flex flex-row items-center'>
                <MyButtonWithIcon title={'Keşfet'} icon={<FontAwesomeIcon icon={faChevronRight} />} />
                <MyButtonLinked title={'Hemen Başvur'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </navbar>
  );
}

/*
w-full  bg-[url(/sectionOne.png)] bg-no-repeat
*/
