import React from 'react';
import { Link } from 'react-router-dom'

export default function Books(props) {
  return (
    <Link className='text-black' to={"/book/overview/"+props.id}>
    <div className='shadow-lg rounded-lg bg-gray-50 hover:bg-red-950 hover:text-white mb-3 hover:scale-105 duration-200 '>
      <div key={props.key}> 
          <div> 
            <div className='relative h-[300px] overflow-hidden'>
              <img  
                src={props.img} 
                alt='Book' 
                className='rounded-b-2xl absolute inset-0 w-full h-full object-contain' 
              />
            </div>
          </div>
          <div className='p-3 text-center overflow-hidden text-ellipsis'>
            <p className='text-xl font-semibold m-2'>{props.name}</p>
            <p className='text-sm'>{props.description}</p> 
          </div>
      </div>
    </div>
    </Link>
  );
}
