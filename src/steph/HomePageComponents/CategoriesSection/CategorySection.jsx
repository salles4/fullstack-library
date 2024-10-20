import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Categories from './Categories';
import { data, responsive } from '../../data';


const CategorySection = () => {
    // Holder for props - Categories
    const categoryy = data.map((item)=> (
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
  



