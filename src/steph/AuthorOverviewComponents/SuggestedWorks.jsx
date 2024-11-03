import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SuggestedBooks = ({ authorName }) => {
  const [books, setBooks] = useState([]);
  const [authorBooks, setAuthorBooks] = useState([]);

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

  useEffect(() => {
    // Filter books by the selected author
    if (authorName) {
      const filteredBooks = books.filter(book => 
        book.author.toLowerCase() === authorName.toLowerCase()
    );
      setAuthorBooks(filteredBooks);
    }
  }, [books, authorName]);

  return (
    <div className='container mx-auto my-10 p-6 bg-gray-50 rounded-lg shadow-md'>
      <div className='text-center font-bold text-3xl mt-10 mb-10'>
      <h1>More From This Author</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
        {authorBooks.length > 0 ? (
          authorBooks.map((book) => (
            <Link to={`/book/overview/${book._id}`} key={book._id}>
              <div className="bg-gray-100 shadow-xl rounded-xl group overflow-hidden transition-transform transform hover:scale-105 hover:bg-red-950 hover:text-white max-w-[420px]">
                <img 
                  src={book.bookcover} 
                  alt={`${book.booktitle} cover`} 
                  className="w-full h-60 object-contain" 
                />
                <div className="p-4 text-black text-center group-hover:text-white">
                  <h3 className="text-lg font-bold group-hover:text-white">{book.booktitle}</h3>
                  <p className="text-gray-500 mb-2 group-hover:text-white">{book.category}</p>
                  <div className='flex justify-center gap-2 text-gray-600 text-sm group-hover:text-white'>
                    <svg
                      className='group-hover:fill-white'
                      fill="#000000"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="25px"
                      viewBox="0 0 64 64"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path d="M32,42c8.271,0,15-8.523,15-19S40.271,4,32,4s-15,8.523-15,19S23.729,42,32,42z M32,8c5.963,0,11,6.869,11,15
                          s-5.037,15-11,15s-11-6.869-11-15S26.037,8,32,8z"/>
                        <path d="M4.103,45.367l-4,12c-0.203,0.61-0.101,1.28,0.275,1.802C0.753,59.691,1.357,60,2,60h60c0.643,0,1.247-0.309,1.622-0.831
                          c0.376-0.521,0.479-1.191,0.275-1.802l-4-12c-0.209-0.626-0.713-1.108-1.348-1.29l-14-4c-0.482-0.139-0.996-0.09-1.444,0.134
                          L32,45.764l-11.105-5.553c-0.448-0.224-0.962-0.272-1.444-0.134l-14,4C4.815,44.259,4.312,44.741,4.103,45.367z M19.802,44.137
                          l11.304,5.652c0.562,0.281,1.227,0.281,1.789,0l11.304-5.652l12.238,3.496L59.226,56H4.774l2.789-8.367L19.802,44.137z"/>
                      </g>
                    </svg>
                    <p className='mt-1 group-hover:text-white text-gray-500'>{book.author}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No books found for this author.</p>
        )}
      </div>
    </div>
  );
};

export default SuggestedBooks;
