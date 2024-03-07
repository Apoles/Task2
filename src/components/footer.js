import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faTwitter, faFontAwesome, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function MyFooter() {
  return (
    <div className=' mt-8 max-w-7xl container  '>
      <div className='mx-auto w-full max-w-screen p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0 w-1/4 max-md:hidden '>
            <p className='text-[#0A296C]'>Id donec quis eu quam neque. Nulla at ultricies volutpat, vel.</p>
          </div>
          <div className='grid grid-cols-2 gap-8  sm:grid-cols-4 md:space-x-1 w-3/4 sm:pl-32 max-sm:container max-sm:pl-6  '>
            <div className=''>
              <h2 className=' mb-6 text-sm font-semibold text-[#0A296C] uppercase '>Product</h2>
              <ul className=' space-y-3 text-[#0f3487] text-base font-medium '>
                <li className=''>
                  <p className=''>Overview</p>
                </li>
                <li>
                  <p>Features</p>
                </li>
                <li>
                  <p>Solutions</p>
                </li>
                <li>
                  <p>Tutorials</p>
                </li>
                <li>
                  <p>Pricing</p>
                </li>
                <li>
                  <p>Releases</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-[#0A296C] uppercase '>Company</h2>
              <ul className=' space-y-3 text-[#0f3487] text-base font-medium'>
                <li className=''>
                  <p className=''>Blog</p>
                </li>
                <li>
                  <p>Newsletter</p>
                </li>
                <li>
                  <p>Events</p>
                </li>
                <li>
                  <p>Help centre</p>
                </li>
                <li>
                  <p>Tutorials</p>
                </li>
                <li>
                  <p>Support</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-[#0A296C] uppercase '>Resources</h2>
              <ul className=' space-y-3 text-[#0f3487] text-base font-medium'>
                <li className=''>
                  <p className=''>About us</p>
                </li>
                <li>
                  <p>Careers </p>
                </li>
                <li>
                  <p>Press</p>
                </li>
                <li>
                  <p>News</p>
                </li>
                <li>
                  <p>Media kit</p>
                </li>
                <li>
                  <p>Contact</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='mb-6 text-sm font-semibold text-[#0A296C] uppercase '>Social</h2>
              <ul className=' space-y-3 text-[#0f3487] dark:text-[#0F3487] font-medium'>
                <li className=''>
                  <p className=''>Twitter</p>
                </li>
                <li>
                  <p>LinkedIn</p>
                </li>
                <li>
                  <p>Facebook</p>
                </li>
                <li>
                  <p>GitHub</p>
                </li>
                <li>
                  <p>AngelList</p>
                </li>
                <li>
                  <p>Dribbble</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto ' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-[#0A296C] sm:text-center '>© 2077 TT PF. All rights reserved.</span>
          <div className='flex mt-4 sm:justify-center sm:mt-0 space-x-5'>
            <FontAwesomeIcon color='#0F3487' size='xl' icon={faTwitter} />
            <FontAwesomeIcon color='#0F3487' size='xl' icon={faLinkedin} />
            <FontAwesomeIcon color='#0F3487' size='xl' icon={faFacebook} />
          </div>
        </div>
      </div>
    </div>
  );
}
