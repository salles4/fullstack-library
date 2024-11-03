import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ShowAllBooks from './ShowAllBooks'


const BooksPage = ({books}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalBooks = books.length;
    
    
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBooks);
    };
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalBooks - 1 : prevIndex - 1
      
      );
    };
  

    useEffect(() => {
      const interval = setInterval(goToNext, 8000);
  
      return () => clearInterval(interval);
    }, [totalBooks]);


  return (
    <>
      <main>
        <section >
          <div className='bg-gray-100 min-h-[450px] w-full rounded-b-[100px] shadow-lg' >
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 p-5 '>

            {/* Image Section (Left Column) */}
            <div className="flex justify-center">
              <div className="border-2 rounded-lg overflow-hidden h-[400px] w-[500px] flex items-center justify-center relative">
                {books.map((book, index) => (
                <div
                    key={book._id}
                    className={`carousel-item flex justify-center ${index === currentIndex ? 'active' : ''}`}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                    <img 
                    className="w-60 h-auto object-contain rounded-lg shadow-lg"
                    src={book.bookcover} 
                    alt="book cover" />
                </div>
                
                ))}
                {/* Navigation Buttons */}
                <button onClick={goToPrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 hover:bg-gray-600">
                    &lt;
                  </button>
                  <button onClick={goToNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 hover:bg-gray-600">
                    &gt;
                  </button>
                </div>
              </div>

                    {/* Info (Right Column) */}
                  <div >
                    {books.map((book, index) => (
                      <div
                          key={book._id}
                          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                          style={{ display: index === currentIndex ? 'block' : 'none' }}>
                      <h1 className='text-4xl font-bold mt-5 sm:text-center md:text-start'>{book.booktitle}</h1>
                      <div className='text-md text-ellipsis overflow-hidden sm:text-center md:text-start mt-2 '>
                          <p > <strong>Written by:</strong> <span className='text-sm'>{book.author}</span> </p>
                          <p className='opacity-60 mb-5'>{book.bookdesc}</p>
                        </div>
                        <button className='bg-gradient-to-r from-red-950 to-red-700 transition-all duration-200 text-white px-4 py-2 rounded-full  flex items-center gap-1 group hover:scale-105'>
                        <Link to={`/book/overview/${book._id}`} className='flex items-center gap-3 text-white'>
                        <span className='block transition-all duration-200'>Show Details</span>
                        <svg className='hidden group-hover:block transition-all duration-200 ml-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M17 12H7M17 12L13 8M17 12L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Link>
                          </button>     
                      </div>
                      ))}      
                  </div>      
                </div>
            </div>
        </section>
      </main>

    </>
   
  
  )
}

export default BooksPage
