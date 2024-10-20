import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {

  const [books, setBooks] = useState([]);

  const [newBook, setNewBook] = useState({});

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
  }

  const handleCreateBook = () => {
    axios.post("http://localhost:8000/api/createBooks", newBook)
     .then(() => {
      fetchBooks();
      setNewBook({ booktitle: '', bookdesc: '', bookcover: '', category: '', author: '', publisher: '', shelfno: '', isbn: '' })
     })
     .catch((error) =>{
      console.log(error);
     });
  };

  return( 
    <>
    <h1 className='addbooktitle'>ADD BOOK PAGE</h1>
    <label>Boot Title</label>
    <input
      type="text"
      placeholder="Book Title"
      value={newBook.booktitle}
      required
      onChange={(e) => setNewBook({...newBook, booktitle: e.target.value})}
    />
    <label>Book Description</label>
    <textarea
      type="text"
      placeholder="Book Description"
      value={newBook.bookdesc}
      required
      onChange={(e) => setNewBook({...newBook, bookdesc: e.target.value})}
    />
    <label>Book Cover</label>
    <input
      type="text"
      placeholder="Book Cover"
      value={newBook.bookcover}
      required
      onChange={(e) => setNewBook({...newBook, bookcover: e.target.value})}
    />
    <label>Category</label>
    <input
      type="text"
      placeholder="Category"
      value={newBook.category}
      required
      onChange={(e) => setNewBook({...newBook, category: e.target.value})}
    />
    <label>Author</label>
    <input
      type="text"
      placeholder="Author"
      value={newBook.author}
      required
      onChange={(e) => setNewBook({...newBook, author: e.target.value})}
    />
    <label>Publisher</label>
    <input
      type="text"
      placeholder="Publisher"
      value={newBook.publisher}
      required
      onChange={(e) => setNewBook({...newBook, publisher: e.target.value})}
    />
    <label>Shelf No.</label>
    <input
      type="number"
      placeholder="Shelf No."
      value={newBook.shelfno}
      required
      onChange={(e) => setNewBook({...newBook, shelfno: e.target.value})}
    />
    <label>ISBN</label>
    <input
      type="number"
      placeholder="ISBN"
      value={newBook.isbn}
      required
      onChange={(e) => setNewBook({...newBook, isbn: e.target.value})}
    />
    <button className="addbookbtn" onClick={handleCreateBook}>ADD BOOK</button>


    <h1 className='bookslisttitle'>BOOKS LIST</h1>
      <ul>
        {books.map(book => (
          
          <li key={book._id}>{book.booktitle} {book.bookdesc} <img src={book.bookcover}></img> {book.category} {book.author} {book.publisher} {book.shelfno} {book.isbn}</li>
        ))}
      </ul>
    </>
  )
}

export default AddBook;