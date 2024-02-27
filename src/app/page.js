import Image from 'next/image';
import Header from '../components/header.js';
import MyTab, { Tabs } from '@/components/tabs.js';
import { Tab } from '@nextui-org/react';
import TabCard from '@/components/tabCard.js';
import { faPen, faCheck, faHardDrive } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import MyAccordion from '@/components/accordion.js';
import MyFooter from '@/components/footer.js';
export default function Home() {
  return (
    <main className='  '>
      <Header></Header>
      <div className='flex flex-col items-center justify-center w-full '>
        <div className=' sm:flex-col mt-12 container border-medium shadow-md md:flex md:flex-row md:items-center py-6 justify-evenly  '>
          <div className=' lg:w-1/4 p-6 space-y-4 '>
            <h1 className='text-[#0A296C] text-2xl font-bold'>Risus, commodo vulputate sagnits</h1>
            <p className='text-[#0A296C] '>
              Nisi, justo pellentesque amet, facilisis rhoncus vel, id nulla quis. Sed et bibendum eget id viverra odio
              bibendum nec. Integer purus blandit tellus in sagittis, risus.
            </p>
          </div>
          <div className=' flex-col  gap-4   p-4   flex md:flex-row items-center   '>
            <div className='border-medium shadow-md px-4 py-1 bg-white flex  flex-col items-center justify-center'>
              <Image className='' width={162} height={173} alt='xd' src={'/sanalPos.svg'}></Image>
              <p className=' font-bold pt-2 text-[#0A296C]'>Sanal Pos</p>
            </div>
            <div className=' border-medium shadow-md flex px-4 py-1 bg-white flex-col items-center justify-center'>
              <Image className='' width={162} height={173} alt='xd' src={'/linkOdeme.png'}></Image>

              <p className='font-bold pt-2 text-[#0A296C]'>Link ile Ödeme</p>
            </div>
            <div className='border-medium shadow-md flex px-4 py-1 bg-white flex-col items-center justify-center'>
              <Image className='' width={162} height={173} alt='xd' src={'/androidPos.png'}></Image>

              <p className='font-bold pt-2 text-[#0A296C]'>Android Pos</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center m-auto w-full sm:w-1/2 mt-24 text-center gap-3'>
          <h1 className='text-[#0F3487] text-3xl font-bold'>Duis sem vestibulum facilisi egestas</h1>
          <p className=' text-[#0A296C]  w-full sm:w-3/4'>
            Eu praesent non blandit porta iaculis. Porttitor volutpat, magna facilisi vestibulum purus, sed sed sed
            posuere. Urna at lorem proin nisi, vel faucibus non at dolor.
          </p>
        </div>
        <div className='mt-24'>
          <Tabs>
            <Tab label='Sanal Pos'>
              <TabCard
                title='Duis sem vestibulum facilisi egestas'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse leo viverra nulla lacus a eleifend massa sed.'
                iconOne={faPen}
                iconTwo={faHardDrive}
                iconTree={faCheck}
              ></TabCard>
            </Tab>

            <Tab label='Link İle Ödeme'>
              <TabCard
                title='Duis sem vestibulum facilisi egestas'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse leo viverra nulla lacus a eleifend massa sed.'
              ></TabCard>
            </Tab>
            <Tab label='Android Pos'>
              <TabCard
                title='Duis sem vestibulum facilisi egestas'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse leo viverra nulla lacus a eleifend massa sed.'
              ></TabCard>
            </Tab>
          </Tabs>
        </div>
        <MyAccordion></MyAccordion>
      </div>
      <MyFooter></MyFooter>
    </main>
  );
}
