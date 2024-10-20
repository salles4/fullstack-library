import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Categories from './Categories';
import { data, responsive } from '../../data';


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

    // Holder for props - Categories
    const categoryy = books.map((item)=> (
      <Categories 
        name={item.name} 
        img={item.img}
        category={item.category} /> ));
      
    return (
      <div className='min-h-[300px] ' >
        <div className='container'>
          {/* Header */}
          <div className='text-left font-bold text-3xl mt-10 mb-10'>
            <h1>Category</h1>
          </div>

          {/* responsive style para mababago yung ddisplay sa slider */}
          <Carousel responsive={responsive}>{categoryy}</Carousel>
        </div>
      </div>
    )
  }
  
export default CategorySection
  



