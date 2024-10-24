import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Authors from './Authors';
import { responsive } from '../../data';
import { Link } from 'react-router-dom'


import React, { useState, useEffect } from 'react';
import axios from 'axios';


// npm install react-multi-carousel --save
// https://www.npmjs.com/package/react-multi-carousel

const AuthorsSection = () => {

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
      fetchAuthors();
  }, []);

  const fetchAuthors = () => {
      axios.get("http://localhost:8000/api/getAuthors")
      .then((response) => {
        console.log(response.data)
        setAuthors(response.data)
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  // Function to get the authorsdetails sa data.js
  const authorss = authors.map((author)=> (
    // Holder for props - Authors
    <Authors 
      id={author._id}
      name={author.name} 
      img={author.picture}
      description={author.bio} 
      link={author.link}
      /> ));

    
  return (
    <div className='min-h-[300px] ' >
      <div className='container'>
        {/* Header */}
        <div className='mt-10 mb-10 flex justify-between m-9'>
          <h1 >Authors</h1>
          <Link className="text-black text-lg" to={"/author"} >See All</Link>
          </div>
        {/* nakapasok ang responsive and authors details sa data.js  */}
        <Carousel responsive={responsive}>{authorss}</Carousel>
      </div>
    </div>
  )
}

export default AuthorsSection
