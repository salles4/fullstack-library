import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import Books from './Books';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'


// For Card Slider
{/* npm install react-slick --save */}
{/* npm install slick-carousel --save */}
{/* https://react-slick.neostack.com/docs/get-started */}


const BooksSection = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:8000/api/getBooks")
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  
  const bookss = books.map((item) => (
    <Books 
      key={item._id}
      id={item._id} 
      name={item.booktitle} 
      img={item.bookcover}
      description={item.bookdesc} 
      author={item.author}
        
    />
  ));
      
  return (
    <div className='min-h-[300px] py-10 bg-gray-50 mt-5'>
      <div className='container mx-auto px-4'>
      {/* Header */}
      <div className='text-center mb-5'>
          <h1 className='text-4xl font-bold text-gray-800'>Books</h1>
          <p className='mt-2 text-gray-600'>Discover a collection of great books.
            <Link className="text-gray-600 hover:underline hover:text-blue-500" to={"/books"}>
              <span>See All</span>
            </Link>
          </p>
        </div>
        {/* Card Slider */}
        <Slider {...settings}>{bookss}</Slider>
      </div>
    </div>
  );
};

export default BooksSection;
