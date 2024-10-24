import React, { useState, useEffect } from 'react';

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
      const interval = setInterval(goToNext, 4000);
  
      return () => clearInterval(interval);
    }, [totalBooks]);
  
    return (
        <div className="carouselMainCont">
        
            <div className='coverHolder'>

                <button onClick={goToPrev}>Previous</button>

                {books.map((book, index) => (
                <div
                    key={book._id}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                    <img className="carouselBookCover" src={book.bookcover} alt="book cover" />
                </div>
                ))}

                <button onClick={goToNext}>Next</button>
            </div>

            <div className='bookDetails'>
                {books.map((book, index) => (
                <div
                    key={book._id}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                    <h1 className='carouselBookTitle'>{book.booktitle}</h1>
                    <h2>Written by: {book.author}</h2>
                    <h2>Published by: {book.publisher}</h2>
                    <h2>Category: {book.category}</h2>
                    <p className='carouselShlefno'>Shelf No. {book.shelfno}</p>
                    <p className='carouselISBN'>ISBN: {book.isbn}</p>
                    <p className='carouselBookDesc'>{book.bookdesc}</p>
                </div>
                ))}
                
            </div>
        
        </div>
    );
  };

  export default BooksCarousel;