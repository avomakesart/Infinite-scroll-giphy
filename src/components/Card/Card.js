import React from 'react';

export const Card = ({ title, children, key, ref }) => {
  return (
    <div
      className='container items-center px-5 py-12'
      key={key}
      ref={ref}
    >
      <div className='flex flex-wrap '>
        <div className='w-full mx-auto my-4 bg-white border rounded-lg shadow-xl'>
          <div className='p-6'>
            <h2 className='mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font'>
              {title}
            </h2>
            <div className='mb-3 text-base leading-relaxed text-gray-500'>
              {children}
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
