import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const TabCard = ({ title, description, iconOne, iconTwo, iconTree }) => {
  return (
    <div className='   flex flex-col lg:flex-row  lg:pt-20 max-lg:pt-10    justify-center items-center  lg:items-start '>
      <Image className='mb-7  max-sm:hidden pl-8  ' src='/tabimage.png' alt='Your Image' width={565} height={520} />

      <div className=' max-md:w-screen    max-md:bg-red-400  md:pl-28 md:pr-20 md:w-full   md:grid md:grid-cols-1  md:gap-10  '>
        <Card title={title} description={description} icon={iconOne} />
        <Card title={title} description={description} icon={iconTwo} />
        <Card title={title} description={description} icon={iconTree} />
      </div>
    </div>
  );
};

const Card = ({ title, description, icon }) => {
  return (
    <div className='bg-white max-md:px-5 flex   max-sm:w-screen    '>
      <div className='w-8 h-8  bg-[#2445D8] flex items-center  rounded-full px-[0.5rem]'>
        <FontAwesomeIcon className=' text-white' icon={icon} />
      </div>
      <div className='   flex flex-col items-start justify-center pl-3    space-y-4'>
        <div className='flex flex-row items-center    '>
          <h2 className='text-xl font-semibold text-[#0F3487] '>{title}</h2>
        </div>
        <p className='text-[#0A296C]    text-base font-normal'>{description}</p>
        <div className='flex flex-row  justify-center'>
          <button className=' text-[#2445D8] font-base  rounded focus:outline-none focus:ring focus:ring-blue-300 pb-4'>
            Learn More
          </button>
          <FontAwesomeIcon className='pl-3 pt-1 items-center' icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default TabCard;
