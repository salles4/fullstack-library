import React from 'react'

export default function Authors(props){

  return (
    // to display contents
    <div className='container'>
        <img className='product--image'
          src= {props.img} alt='Book'/>         
        <p className='text-xl font-semibold'>{props.name}</p>
    </div>
  );
}