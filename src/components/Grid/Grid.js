import React from 'react';

export const Grid = ({ children, ref, key }) => {
  return (
    <div
      className='grid gap-2 mb-8 md:grid-cols-2 lg:grid-cols-3'
      ref={ref}
      key={key}
    >
        {children}
    </div>
  );
};
