import React from 'react'

export default function Categories(props){

  return (
        // to display contents
        <div className='container'>
        <div className=' min-h-[400px] min-w-[300px] shadow-md rounded-lg bg-gray-50 hover:shadow-xl mb-3'>
          <div key={props.id}> 
            <div> 
              <div className='relative min-h-[400px] overflow-hidden  '>
                <img  
                  src={props.img} 
                  alt='Book' 
                  className='rounded-b-2xl absolute inset-0 w-full h-full object-contain' 
                  />
              </div>
            </div>
            <div className='p-3 text-center overflow-hidden text-ellipsis'>
              <p className='text-xl font-semibold m-2'>{props.name}</p>
              <p className='text-sm'>{props.category}</p>
            </div>
          </div>
        </div>
      </div>
  );
}