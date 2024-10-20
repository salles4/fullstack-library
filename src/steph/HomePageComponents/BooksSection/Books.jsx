import React from 'react'

export default function Books (propss){

  return (
    <div key={propss.id} // bg ng card
        className='rounded-b-2xl bg-gray-100  shadow-lg mb-3 m-1
        hover:bg-red-950  hover:text-white max-w-[420px]'> 
        {/* //Another div for hover */}
        <div className='hover:scale-105 duration-200'> 
          <div className='max-h-[400px]'> 
            <img src={propss.img} alt='Book' 
            className='rounded-b-2xl '/> 
        </div>
        <div className='p-5 text-center' >
            <p className='text-xl font-semibold'>{propss.name}</p>
            <p>{propss.description}</p>
        </div>
      </div> 
    </div>

  );
}
