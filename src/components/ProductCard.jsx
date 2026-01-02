import React from 'react';
import productImg from '../assets/product-cover.jpg';

export default function ProductCard() {
  return (
    <div className='flex flex-col items-center w-full '>
      <img 
      src={productImg}
      alt='product'
      className='w-full object-cover'
      />
      <div className='p-6 flex flex-col items-center gap-3'>
        <h5 className='font-bold text-slate-800 text-base '>Graphic Design</h5>
          <p className='text-gray-500 font-bold text-sm '>English Department</p>
            <div className='flex gap-2'>
              <span className='text-gray-400 font-bold line-through'>$16.48</span>
              <span className='text-green-600 font-bold '>$6.48</span>
              </div>
              </div>
              </div>
  );
}