import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Categories from './Categories';
import { data, responsive } from '../../data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CategorySection = () => {
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

  
  const categoryItems = books.map((item) => (
    <Categories 
      key={item.id}
      name={item.booktitle} 
      img={item.bookcover}
      category={item.category} 
    />
  ));
      
  return (
    <div className='min-h-[300px]'>
      <div className='container'>
        {/* Header */}
        <div className='mt-10 mb-10 flex justify-between m-9'>
          <h1>Categories</h1>
          <Link className="text-black text-lg" to={"/jerome/bookcategory"}>See All</Link>
        </div>

        {/* Responsive style for the slider */}
        <Carousel responsive={responsive}>{categoryItems}</Carousel>
      </div>
    </div>
  );
}

export default CategorySection;
