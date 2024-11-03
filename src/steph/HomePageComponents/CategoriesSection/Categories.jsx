import React from 'react'
import { Link } from 'react-router-dom'


export default function Categories(props){

  return (
        // to display contents
        <Link className='text-black' to={`/jerome/bookcategory/${props.category}`}>

        <div className='container'>
        <div className=' min-h-[400px] min-w-[300px] group  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 border border-gray-200  mb-3'>
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
            <div className='p-3 text-center overflow-hidden text-ellipsis'>
              <p className='text-xl font-semibold m-2 group-hover:text-red-600'>{props.category}</p>
              </div>
          </div>
        </div>
      </div>
      </Link>

  );
}