'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function MyAccordion() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className='bg-[#D9DBE9] m-auto w-full py-24   flex flex-col items-center justify-center gap-12 max-md:px-4  '>
      <div className='flex flex-col items-center m-auto w-full sm:w-1/2 max-w-7xl   text-center gap-3'>
        <h1 className='text-[#0F3487] text-3xl font-bold'>Amet, suspendisse nullam tellus gravida arcu.</h1>
        <p className=' text-[#0A296C] w-3/4'>
          Dictum maecenas facilisi ante odio interdum ac. Nibh in lectus ut at sit congue auctor. Et nec nec, mattis
          adipiscing aenean imperdiet enim sed.
        </p>
      </div>
      <div className=' bg-white sm:w-1/2  w-full   sm:px-24 sm:py-12 p-4    rounded-xl'>
        <Accordion className='max-w-7xl  text-[#0A296C]'>
          <AccordionItem
            classNames={{ title: 'text-[#0A296C]' }}
            key='1'
            aria-label='Accordion 1'
            title='Leo mattis molestie amet dictum sed enim risus dolor.'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            classNames={{ title: 'text-[#0A296C]' }}
            key='2'
            aria-label='Accordion 2'
            title='Ut pretium, non tincidunt non senectus ut tellus.'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            classNames={{ title: 'text-[#0A296C]' }}
            key='3'
            aria-label='Accordion 3'
            title='Viverra turpis ipsum vel ac purus tristique vivamus.'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            classNames={{ title: 'text-[#0A296C]' }}
            key='4'
            aria-label='Accordion 4'
            title='Hac rhoncus porttitor libero ac egestas feugiat.'
          >
            {defaultContent}
          </AccordionItem>

          <AccordionItem
            key='5'
            classNames={{ title: 'text-[#0A296C]' }}
            aria-label='Accordion 5'
            title='Sit tincidunt ullamcorper luctus mi elit.'
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key='6'
            classNames={{ title: 'text-[#0A296C]' }}
            aria-label='Accordion 6'
            title='Semper sit erat et, ultrices malesuada arcu.'
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
