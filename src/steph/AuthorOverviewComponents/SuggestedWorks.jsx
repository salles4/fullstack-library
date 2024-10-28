import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { data } from '../data';


const SuggestedBooks = () => {
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
  return (
    <div>
        <div>
          <div className='container'>
            <div className='text-center font-bold text-3xl mt-5 mb-10 '>
                <h1>More From This Author</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 ">
                {books.map((book) => (
                <div 
                    key={book.id}
                    className= "bg-gray-100 shadow-xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:bg-red-950 hover:text-white max-w-[420px]">
                    <img src={book.bookcover} alt={book.booktitle} className="w-full h-auto object-cover " />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{book.booktitle}</h3>
                        <p className="text-gray-500 mb-2">{book.category}</p>
                        <p className="text-sm text-gray-700">{book.description}</p>
                    </div>
                </div>))}
            </div>
            </div>  
        </div>
    </div>
  )
}

export default SuggestedBooks
