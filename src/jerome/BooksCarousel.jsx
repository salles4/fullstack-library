import React, { useState, useEffect } from 'react';
import Navbar from '../steph/HomePageComponents/Navbar/Navbar';


const BooksCarousel = ({ books }) => {
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
      <nav><Navbar/></nav>
      <main>
         <section >
             <div className='bg-gray-100 min-h-[500px] w-full rounded-b-[100px]' >
             <div>
                 <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 p-10' >
 
                     {/* Image Section (Left Column) */}
                     <div className='flex justify-center items-center border-2 min-w-[300px] min-h-[400px]'>
                        <button className='m-10 ' onClick={goToPrev}>Previous</button>
                        {books.map((book, index) => (
                        <div
                            key={book._id}
                            className={`carousel-item w-full max-w-lg-auto ${index === currentIndex ? 'active' : ''}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        >
                            <img 
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                            src={book.bookcover} 
                            alt="book cover" />
                        </div>
                        ))}
                        <button className='m-10 px-5' onClick={goToNext}>Next</button>
                        </div>
                     {/* Info (Right Column) */}
                     <div>
                        {books.map((book, index) => (
                        <div
                            key={book._id}
                            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}>
                            <h1 className='text-4xl font-bold mt-5 sm:text-center md:text-start '>{book.booktitle}</h1>
                            <div className='font-semibold text-lg text-ellipsis overflow-hidden sm:text-center md:text-start '>
                            <p >Written by: <span className='text-sm'>{book.author}</span> </p>
                            <p>Published by: <span className='text-sm'>{book.publisher}</span></p>
                            <p>Category: <span className='text-sm'>{book.category}</span></p>
                            <p >Shelf No. <span className='text-sm'>{book.shelfno}</span></p>
                            <p >ISBN: <span className='text-sm'>{book.isbn} </span></p>
                            <p className='opacity-60 mt-2 m-1 mb-5'>{book.bookdesc}</p>
                            <button>View Details</button>
                            </div>
                        </div>
                        ))}      
                    </div>      
                 </div>
             </div>
             </div>
         </section>
     </main>
 
     </>
  //     <div className="carouselMainCont">
        
     

 
  
  // </div>
    );
  };

  export default BooksCarousel;