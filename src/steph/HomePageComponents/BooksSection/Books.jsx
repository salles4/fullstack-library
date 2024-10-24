import React from 'react';

export default function Books(propss) {
  return (
    <div className='max-w-[350px] min-h-[420px] shadow-lg rounded-lg bg-gray-50 hover:bg-red-950 hover:text-white mb-3 hover:scale-105 duration-200 '>
      <div key={propss.id}> 
          <div> 
            <div className='relative h-[300px] overflow-hidden'>
              <img  
                src={propss.img} 
                alt='Book' 
                className='rounded-b-2xl absolute inset-0 w-full h-full object-contain' 
              />
            </div>
          </div>
          <div className='p-3 text-center overflow-hidden text-ellipsis h-[300px]'>
            <p className='text-xl font-semibold m-2'>{propss.name}</p>
            <p className='text-sm'>{propss.description}</p>
          </div>
      </div>
    </div>
  );
}
