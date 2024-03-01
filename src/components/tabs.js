'use client';
import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className='flex flex-col items-center max-w-7xl'>
      <div className='flex  w-full  md:px-44 max-md:px-4  border-b border-gray-300'>
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'border-b-2  font-bold text-[#2445D8] border-[#2445D8]' : ''
            } flex-1  font-medium py-2 text-[#0A296C]`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className='py-4  '>
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className='hidden'>
      {children}
    </div>
  );
};
export { Tabs, Tab };
