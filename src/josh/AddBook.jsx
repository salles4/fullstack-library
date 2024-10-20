import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {

  //books, setBooks
  const [books, setBooks] = useState([]);
  //newBook, setNewBook
  const [newBook, setNewBook] = useState({});

  useEffect(() => {
    //fetchBooks();
    fetchBooks();
  }, []);

  //fetchBooks
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
  }

  const handleCreateBook = () => {
    axios.post("http://localhost:8000/api/createBooks", newBook)
     .then(() => {
      //fetchBooks;
      fetchBooks();
      //setNewBook
      setNewBook({ booktitle: '', bookdesc: '', bookcover: '', category: '', author: '', publisher: '', shelfno: '', isbn: '' })
     })
     .catch((error) =>{
      console.log(error);
     });
  };

  return( 
    <>
    <h1>Add Book Page</h1>
    <input
      type="text"
      placeholder="Book Title"
      value={newBook.booktitle}
      required
      onChange={(e) => setNewBook({...newBook, booktitle: e.target.value})}
    />
    <textarea
      type="text"
      placeholder="Book Description"
      value={newBook.bookdesc}
      required
      onChange={(e) => setNewBook({...newBook, bookdesc: e.target.value})}
    />
    <input
      type="text"
      placeholder="Book Cover"
      value={newBook.bookcover}
      required
      onChange={(e) => setNewBook({...newBook, bookcover: e.target.value})}
    />
    <input
      type="text"
      placeholder="Category"
      value={newBook.category}
      required
      onChange={(e) => setNewBook({...newBook, category: e.target.value})}
    />
    <input
      type="text"
      placeholder="Author"
      value={newBook.author}
      required
      onChange={(e) => setNewBook({...newBook, author: e.target.value})}
    />
    <input
      type="text"
      placeholder="Publisher"
      value={newBook.publisher}
      required
      onChange={(e) => setNewBook({...newBook, publisher: e.target.value})}
    />
    <input
      type="number"
      placeholder="Shelf No."
      value={newBook.shelfno}
      required
      onChange={(e) => setNewBook({...newBook, shelfno: e.target.value})}
    />
    <input
      type="number"
      placeholder="ISBN"
      value={newBook.isbn}
      required
      onChange={(e) => setNewBook({...newBook, isbn: e.target.value})}
    />
    <button onClick={handleCreateBook}>Add Book</button>


    <h1>Books List</h1>
      <ul>
        {books.map(book => (
          
          <li key={book._id}>{book.booktitle} {book.bookdesc} <img src={book.bookcover}></img> {book.category} {book.author} {book.publisher} {book.shelfno} {book.isbn}</li>
        ))}
      </ul>
    </>
  )
}

export default AddBook;