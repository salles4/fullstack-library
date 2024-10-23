import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {

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
  }

  const handleDeleteBook = (id) =>{
    axios.delete(`http://localhost:8000/api/deleteBooks/${id}`)
     .then(()=>{
      fetchBooks();
     })
     .catch((error) => {
      console.log(error);
     });
  };

  return( 
    <>
    <h1 className='bookslisttitle'>BOOKS LIST</h1>
        
        <table>
            <tr>
                <th className='thtitle'>Title</th>
                <th className='thdesc'>Description</th>
                <th className='thcover'>Cover</th>
                <th>Category</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Shelf No.</th>
                <th>ISBN</th>
                <th>Action</th>
            </tr>
            {books.map(book => (
                <tr>
                    <>
                    <td key={book._id}>{book.booktitle}</td>
                    <td key={book._id}>{book.bookdesc}</td>
                    <td key={book._id}><img className='bookcover' src={book.bookcover} alt='book cover'></img></td>
                    <td key={book._id}>{book.category}</td>
                    <td key={book._id}>{book.author}</td>
                    <td key={book._id}>{book.publisher}</td>
                    <td key={book._id}>{book.shelfno}</td>
                    <td key={book._id}>{book.isbn}</td>
                    <td><button>EDIT</button><button onClick={()=> handleDeleteBook(book._id)}>DELETE</button></td>
                    </>
                </tr>
            ))}
        </table>
        {/* <ul>
            
            {books.map(book => (
            
            <li key={book._id}>{book.booktitle} {book.bookdesc} <img className='bookcover' src={book.bookcover} alt='book cover'></img> {book.category} {book.author} {book.publisher} {book.shelfno} {book.isbn}
            <button onClick={()=> handleDeleteBook(book._id)}>DELETE</button>
            </li>
            ))}
        </ul> */}
    </>
  )
}

export default AddBook;