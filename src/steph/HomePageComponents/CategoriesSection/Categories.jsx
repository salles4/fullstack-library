import React from 'react'

export default function Categories(props){

  return (
        // to display contents
    <div className='container'>
        <img className='Books--Image'
          src= {props.img} alt='Book'/>         
        <p className='text-xl font-semibold'>{props.category}</p>
    </div>
  );
}