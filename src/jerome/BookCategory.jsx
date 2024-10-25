import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BooksCarousel from './BooksCarousel';

function BookCategory(){


    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        axios.get("http://localhost:8000/api/getBooks")
          .then((response) => {
            console.log(response.data);
            setBooks(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return(
        <>
            <BooksCarousel books={books} />

            <div className='mainCont'>
                <h1 className='allTitle'>General Knowledge</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "General Knowledge")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>


            <div className='mainCont'>
                <h1 className='allTitle'>Philosophy and Psychology</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "Philosophy and Psychology")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>

            <div className='mainCont'>
                <h1 className='allTitle'>Religion</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "Religion")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>




            <div className='mainCont'>
                <h1 className='allTitle'>Social Sciences</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "Social Sciences")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>


            <div className='mainCont'>
                <h1 className='allTitle'>Languages</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "Languages")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>


            <div className='mainCont'>
                <h1 className='allTitle'>Science</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "Science")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>


            <div className='mainCont'>
                <h1 className='allTitle'>Technology</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "Technology")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>


            <div className='mainCont'>
                <h1 className='allTitle'>Arts and Recreation</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "Arts and Recreation")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>


            <div className='mainCont'>
                <h1 className='allTitle'>Literature</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "Literature")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>


            <div className='mainCont'>
                <h1 className='allTitle'>History and Geography</h1>
                

                <div className='imagesHolder'>
                    {books
                    .filter(book => book.category === "History and Geography")
                    .slice(0, 4)
                    .map((book, index) => (
                        <img key={index} src={book.bookcover} alt="book cover" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default BookCategory;