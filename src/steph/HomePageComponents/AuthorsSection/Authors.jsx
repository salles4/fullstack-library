import React from 'react'
import { Link } from 'react-router-dom'

export default function Authors(props){

  return (
    // to display contents
    <Link className='text-black' to={"/author/overview/"+props.id}>
    <div className='container'>
    <div className=' min-h-[400px] min-w-[300px] bg-gray-50 border border-gray-200 hover:text-red-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  mb-3'>
    <div key={props.id}> 
          <div> 
            <div className='relative min-h-[400px] overflow-hidden'>
              <img  
                src={props.img} 
                alt='Book' 
                className=' mt-5 rounded-xl absolute inset-0 w-full h-full object-contain' 
          
              />
            </div>
          </div>
          <div className='p-3 text-center overflow-hidden text-ellipsis'>
          <p className='text-xl font-semibold m-2'>
                {props.name}
              </p>          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}