import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const TabCard = ({ title, description, iconOne, iconTwo, iconTree }) => {
  return (
    <div className=' '>
      <div className=' h-full flex flex-col lg:flex-row p-24  justify-center items-start '>
        <Image className='w-full h-full mr-32' src='/tabimage.png' alt='Your Image' width={300} height={200} />

        <div className=' w-full h-full  grid grid-cols-1 s gap-4  '>
          <Card title={title} description={description} icon={iconOne} />
          <Card title={title} description={description} icon={iconTwo} />
          <Card title={title} description={description} icon={iconTree} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, icon }) => {
  return (
    <div className='bg-white py-3 sm:p-6'>
      <div className='flex flex-row items-center gap-3  mb-4'>
        <FontAwesomeIcon className='' icon={icon} />
        <h2 className='text-xl font-semibold text-[#0F3487] '>{title}</h2>
      </div>
      <p className='text-[#0A296C] mb-4'>{description}</p>
      <button className=' text-[#0A296C] font-semibold py-2  rounded focus:outline-none focus:ring focus:ring-blue-300'>
        Learn More
      </button>
    </div>
  );
};

export default TabCard;
