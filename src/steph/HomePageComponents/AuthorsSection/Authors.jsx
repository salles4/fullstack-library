import React from 'react'

export default function Authors(props){

  return (
    // to display contents
    <div className='container'>
      <div className=' min-h-[450px] min-w-[300px] shadow-md rounded-lg bg-gray-100 hover:shadow-xl mb-3'>
        <div key={props.id}> 
          <div> 
            <div className='relative min-h-[350px] overflow-hidden '>
              <img  
                src={props.img} 
                alt='Book' 
                className='rounded-xl absolute inset-0 w-full h-full object-cover' 
              />
            </div>
          </div>
          <div className='p-3 text-center overflow-hidden text-ellipsis'>
            <p className='text-xl font-semibold m-2'>{props.name}</p>
            <p className='text-sm'>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}