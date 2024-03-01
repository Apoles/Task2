import Image from 'next/image';
import Header from '../components/header.js';
import MyTab, { Tabs } from '@/components/tabs.js';
import { Tab } from '@nextui-org/react';
import TabCard from '@/components/tabCard.js';
import { faPen, faCheck, faHardDrive } from '@fortawesome/free-solid-svg-icons';
import MyAccordion from '@/components/accordion.js';
import MyFooter from '@/components/footer.js';
export default function Home() {
  return (
    <main className='  '>
      <Header />
      <div className='flex flex-col items-center justify-center w-full '>
        <div className=' sm:flex-col mt-12 container rounded-md shadow-ornek  md:flex md:flex-row md:items-center pt-8 pb-10 justify-between px-10 max-w-7xl '>
          <div className='sm:space-y-5  md:w-1/3 md:pl-12 md:pr-8 '>
            <h1 className='text-[#0A296C] text-3xl font-bold  '>Risus, commodo vulputate sagnits</h1>
            <p className='text-[#0A296C] text-sm font-medium'>
              Nisi, justo pellentesque amet, facilisis rhoncus vel, id nulla quis. Sed et bibendum eget id viverra odio
              bibendum nec. Integer purus blandit tellus in sagittis, risus.
            </p>
          </div>
          <div className=' flex-col max-md:space-y-5  max-md:mt-8  md:space-x-4 md:p-4   flex md:flex-row items-center  md:w-2/3   justify-end text-lg'>
            <div className='rounded-lg shadow-ornek-2 py-5 px-9 bg-white flex  border border-[#E8EAF1] flex-col items-center justify-center'>
              <Image className='object-contain' width={162} height={173} alt='xd' src={'/sanalPos.svg'}></Image>
              <p className=' font-bold pt-5 text-[#0A296C]'>Sanal Pos</p>
            </div>
            <div className='rounded-lg shadow-ornek-2 py-5 px-9 bg-white flex  border border-[#E8EAF1] flex-col items-center justify-center '>
              <Image className='object-contain' width={162} height={173} alt='xd' src={'/linkOdeme.png'}></Image>

              <p className='font-bold pt-5 text-[#0A296C]'>Link ile Ödeme</p>
            </div>
            <div className='rounded-lg shadow-ornek-2 py-5 px-9 bg-white flex  border border-[#E8EAF1] flex-col items-center justify-center '>
              <Image className='object-contain ' width={162} height={173} alt='xd' src={'/androidPos.png'}></Image>

              <p className='font-bold pt-5 text-[#0A296C]'>Android Pos</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center m-auto w-full sm:w-1/2 mt-24 text-center gap-3 max-w-7xl  max-md:px-5 '>
          <h1 className='text-[#0F3487] text-3xl font-bold'>Duis sem vestibulum facilisi egestas</h1>
          <p className=' text-[#0A296C]  w-full sm:w-3/4'>
            Eu praesent non blandit porta iaculis. Porttitor volutpat, magna facilisi vestibulum purus, sed sed sed
            posuere. Urna at lorem proin nisi, vel faucibus non at dolor.
          </p>
        </div>
        <div className='mt-24 mb-32  '>
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
                description='Lorem ipsum dolor ahmt mehmet abdullah hakan mert caner amet, consectetur adipiscing elit. Habitasse leo viverra nulla lacus a eleifend massa sed.'
                iconOne={faPen}
                iconTwo={faHardDrive}
                iconTree={faCheck}
              ></TabCard>
            </Tab>
            <Tab label='Android Pos'>
              <TabCard
                title='Duis sem vestibulum facilisi egestas'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse leo viverra nulla lacus a eleifend massa sed.'
                iconOne={faPen}
                iconTwo={faHardDrive}
                iconTree={faCheck}
              ></TabCard>
            </Tab>
          </Tabs>
        </div>
        <MyAccordion></MyAccordion>
        <MyFooter></MyFooter>
      </div>
    </main>
  );
}
