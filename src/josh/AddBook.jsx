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

  const clearEntries = () => {
    setNewBook({booktitle: '', bookdesc: '', bookcover: '', category: '', author: '', publisher: '', shelfno: '', isbn: ''})
  }

  return( 
    <>
    <h1 className='addbooktitle'>ADD BOOK PAGE</h1>

    <div className='ctn'>

    <div className='addbookctn1'>
    <label>Book Title</label>
    <input
      className='inputbooktitle'
      type="text"
      placeholder="Book Title"
      value={newBook.booktitle}
      required
      onChange={(e) => setNewBook({...newBook, booktitle: e.target.value})}
    />
    <label>Book Description</label>
    <textarea
      className='textareabookdesc'
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
    </div>

    <div className='addbookctn2'>
    <label>Category</label>
    <select value={newBook.category} onChange={(e) => setNewBook({...newBook, category: e.target.value})}>
      <option>GENERAL KNOWLEDGE</option>
      <option>PHILOSOPHY & PSYCHOLOGY</option>
      <option>RELIGION</option>
      <option>SOCIAL SCIENCES</option>
      <option>LANGUAGES</option>
      <option>SCIENCE</option>
      <option>TECHNOLOGY</option>
      <option>ARTS & RECREATION</option>
      <option>LITERATURE</option>
      <option>HISTORY & GEOGRAPHY</option>
    </select>
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
      min="0"
      placeholder="Shelf No."
      value={newBook.shelfno}
      required
      onChange={(e) => setNewBook({...newBook, shelfno: e.target.value})}
    />
    <label>ISBN</label>
    <input
      type="number"
      min="0"
      maxLength={13}
      placeholder="ISBN"
      value={newBook.isbn}
      required
      onChange={(e) => setNewBook({...newBook, isbn: e.target.value})}
    />
    </div>
    </div>
    
    <div className='btnctn'>
    <button className="addbookbtn" onClick={handleCreateBook}>ADD BOOK</button>
    <button className="resetbtn" onClick={clearEntries}>RESET</button>
    <button className="cancelbtn">CANCEL</button>
    </div>

    {/* <h1 className='bookslisttitle'>BOOKS LIST</h1>
      <ul>
        {books.map(book => (
          
          <li key={book._id}>{book.booktitle} {book.bookdesc} <img className='bookcover' src={book.bookcover} alt='book cover'></img> {book.category} {book.author} {book.publisher} {book.shelfno} {book.isbn}</li>
        ))}
      </ul> */}
    </>
  )
}

export default AddBook;