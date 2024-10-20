import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Books from './Books';
import { data, responsive } from '../../data';


// For Card Slider
{/* npm install react-slick --save */}
{/* npm install slick-carousel --save */}
{/* https://react-slick.neostack.com/docs/get-started */}


const BooksSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 3000, // For Bigger desktop
          settings: {
              slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024, // For table
          settings: {
              slidesToShow: 2,
          },
      },
      {
          breakpoint: 800, // For mobile
          settings: {
              slidesToShow: 1,
          },
      },
  ],
};
  
  const books = data.map((item)=> (
    // Holder for props - Books
    <Books 
      key={item.id}
      name={item.name} 
      img={item.img}
      // category={item.category} para overview lang lalabas
      description={item.description} /> ));
      
  return (
    <div className='min-h-[300px]'>
      <div className='container'>
        {/* Header */}
        <div className='text-center font-bold text-3xl mt-5 mb-10'>
          <h1>Books</h1>
        </div>
        {/* Card Slider */}
        <Slider {...settings}>{books}</Slider>
      </div>
    </div>
  );
};

export default BooksSection;
