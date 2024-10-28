import SuggestedBooks from '../BookOverviewComponents/SuggestedBooks';
import Navbar from '../HomePageComponents/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/getBooks/" + id)
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  return (
    <>
      <nav><Navbar/></nav>
      <main>
        <section>
          <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 p-10'>
            <div className='text-start m-5'>
              <h1>{book.booktitle}</h1>
              <p>Category: {book.category}</p>
              <p>Author: {book.author}</p>
              <p>Publisher: {book.publisher}</p>
              <p>Shelf No: {book.shelfno}</p>
              <p>ISBN: {book.isbn}</p>
              <div className='text-end mt-10'>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div>
              <div className="flex justify-center border-2 min-w-[300px] min-h-[400px] ">
                <img src={book.bookcover} alt="Book Details"
                  className="w-full h-auto object-cover rounded-lg shadow-lg "/>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SuggestedBooks/>
        </section>
      </main>
    </>
  );
};

export default BookDetails;
