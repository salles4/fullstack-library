
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BooksPage from './BooksPage';
import { Link } from 'react-router-dom'
import Footer from '../HomePageComponents/Footer/Footer';




const ShowAllBooks = () => {
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
      <>
        <BooksPage books={books} />
        <div className="container ">
          <div className="text-center font-bold text-3xl mt-5 mb-[130px] ">
            <h1>More Books</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {books.map((book) => (
              <Link to={`/book/overview/${book._id}`} key={book.id}>
                <div className=" bg-slate-50 drop-shadow-xl rounded-xl sm:min-w-[250px]  transition-transform transform hover:scale-105 hover:bg-gray-100 group max-w-[420px] mb-[100px]">
                  <div className="h-[150px] ">
                    <img
                      src={book.bookcover}
                      alt={book.booktitle}
                      className="block mx-auto transform -translate-y-[100px]  h-60 object-contain"
                    />
                  </div>
                  <div className="p-4 text-center text-black ">
                    <h3 className="text-lg font-bold ">{book.booktitle}</h3>
                    <p className="text-sm text-gray-700">{book.bookdesc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
}

export default ShowAllBooks
