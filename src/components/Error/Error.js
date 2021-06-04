import React from 'react';

export const Error = ({ description, errorType }) => {
  return (
    <section className='text-gray-700'>
      <div className='container px-8 mx-auto py-36 lg:px-4'>
        <div className='flex flex-col w-full mb-12 text-left lg:text-center'>
          <h2 className='mb-1 text-lg font-semibold tracking-widest text-gray-200 uppercase title-font'>
            {description}
          </h2>
          <h1 className='mb-6 text-9xl font-semibold tracking-tighter text-white'>
            {errorType}
          </h1>
        </div>
      </div>
    </section>
  );
};
