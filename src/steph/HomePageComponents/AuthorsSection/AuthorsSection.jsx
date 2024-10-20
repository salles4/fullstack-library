import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Authors from './Authors';
import { authors, responsive } from '../../data';


// npm install react-multi-carousel --save
// https://www.npmjs.com/package/react-multi-carousel

const AuthorsSection = () => {
  // Function to get the authorsdetails sa data.js
  const authorss = authors.map((item)=> (
    // Holder for props - Authors
    <Authors 
      name={item.name} 
      img={item.img}
      category={item.category}
      description={item.description} /> ));
    
  return (
    <div className='min-h-[300px] ' >
      <div className='container'>
        {/* Header */}
        <div className='text-left font-bold text-3xl mt-10 mb-10'>
          <h1>Authors</h1>
        </div>
        {/* nakapasok ang responsive and authors details sa data.js  */}
        <Carousel responsive={responsive}>{authorss}</Carousel>
      </div>
    </div>
  )
}

export default AuthorsSection
