import SuggestedBooks from '../BookOverviewComponents/SuggestedBooks';
import Navbar from '../HomePageComponents/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../HomePageComponents/Footer/Footer';



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
        <div className='bg-gray-100 min-h-[500px] w-full rounded-b-[100px] shadow-lg' >
          <div className='container grid grid-cols-1 md:grid-cols-2 p-5 '>

            {/* Book Info */}
            <div className='text-start m-5 p-10'>
              <h2 className="text-2xl font-semibold ">Book Details</h2>
                  <p className="text-sm"><strong>Shelf No:</strong> {book.shelfno}</p>
                  <p className="text-sm mb-4"><strong>ISBN:</strong> {book.isbn}</p>
                  <p className="text-lg"><strong>Category:</strong> {book.category}</p>
                  <p className="text-lg"><strong>Author:</strong> {book.author}</p>
                  <p className="text-lg"><strong>Publisher:</strong> {book.publisher}</p>
                  <p className="text-lg"><strong>Description:</strong> </p>
                  <p>{book.bookdesc}</p>

                  
              <div className='text-end mt-10'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Edit</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-2'>Delete</button>
              </div>
            </div>

            {/* Book Cover */}
              <div className="flex justify-center">
                <div className="border-2 rounded-lg overflow-hidden h-[500px] w-[500px] flex items-center justify-center">
                  <img 
                    src={book.bookcover} 
                    alt="Author Cover"
                    className="w-full h-full object-contain p-5" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SuggestedBooks/>
        </section>
      </main>
      <Footer/>

    </>
  );
};

export default BookDetails;
