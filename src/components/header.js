import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link.js';
import Image from 'next/image.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <navbar className=' w-full flex flex-col'>
      <div className='  max-sm:flex-col max-sm:items-center max-sm:justify-center  flex flex-row items-center justify-between px-14 py-6  w-full  '>
        <div className=' sm:flex gap-4 max-sm:space-y-4 max-sm:mb-5  '>
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
        <div className='  flex flex-row items-center space-x-12'>
          <Button className='rounded-md bg-white text-[#0A296C] border-gray-300 border px-4 py-2' href='#'>
            Giriş Yap
          </Button>
          <div>
            <Button className='rounded-md  bg-[#2445D8]' as={Link} color='primary' href='#'>
              Hemen başvur
            </Button>
          </div>
        </div>
      </div>
      <div className=' max-sm:hidden '>
        <div className='relative'>
          <Image className='h-2/6 lg:h-1/3' width={30000} height={540} alt='xd' src={'/sectionOne.png'}></Image>
          <div className='  flex flex-col items-start space-y-12  absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2  w-1/2'>
            <h1 className='text-xl  lg:text-6xl font-bold text-white'>Suscipit duis faucibus vestibulum fusce amet.</h1>
            <p className=' text-medium lg:text-lg text-white mt-2 w-2/3 '>
              Scelerisque eu integer dolor faucibus nunc quam auctor sed. Vulputate vulputate turpis convallis nibh
              donec arcu mauris.
            </p>
            <div className='flex space-x-6 justify-center mt-4'>
              <div style={{ backgroundColor: '#2445D8' }} className=' '>
                <button className=' text-white font-bold py-3 pl-5 pr-3 mr-2 rounded text-2xl'>Keşfet</button>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className='fas fa-check pr-4'
                  style={{ color: 'white' }}
                ></FontAwesomeIcon>
              </div>
              <button className=' text-white font-bold py-2 px-4 rounded'>Hemen Başvur</button>
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
