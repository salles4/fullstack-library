import React from 'react'

export default function Categories(props){

  return (
        // to display contents
        <div className='container'>
        <div className=' min-h-[400px] min-w-[300px] group  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100  mb-3'>
          <div key={props.id}> 
            <div> 
              <div className='relative min-h-[350px] overflow-hidden'>
                <img  
                  src={props.img} 
                  alt='Book' 
                className=' mt-5 rounded-xl absolute inset-0 w-full h-full object-contain' 
                  />
              </div>
            </div>
            <div className='p-3 text-center overflow-hidden h-[100px] text-ellipsis'>
              <p className='text-xl font-semibold m-2'>{props.name}</p>
              <p className='text-sm text-gray-600 group-hover:text-red-600'>{props.category}</p>
              </div>
          </div>
        </div>
      </div>
  );
}