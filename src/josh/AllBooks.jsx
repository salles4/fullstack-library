import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AddBook = () => {

  const [books, setBooks] = useState([]);
  
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get("http://localhost:8000/api/getBooks")
      .then((response) => {
        // console.log(response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteBook = (id, booktitle) => {

    const delConf = prompt("Enter book title to confirm book deletion (case-sensitive):")

    if(delConf === booktitle){
      axios.delete(`http://localhost:8000/api/deleteBooks/${id}`)
        .then(() => {
        fetchBooks();
      })
      .catch((error) => {
        console.log(error);
      });
      alert("Book Deletion of "+booktitle+" Successful!")
    }else{
      alert("Book Deletion Unsuccessful!")
    }
  };

  const handleEditBook = (id) => {
    axios.put(`http://localhost:8000/api/updateBooks/${id}`, editBook)
     .then(() => {
      fetchBooks();
      setEditBook(null);
     })
     .catch((error)=>{
      console.log(error);
     });
  };

  return (
    <>
      <h1 className='bookslisttitle'>BOOKS LIST</h1>

      <div className='allBooksMainCont'>
        <table className='allBooksTable'>
          <thead>
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
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book._id}>
                <td>{book.booktitle}</td>
                <td>{book.bookdesc}</td>
                <td><img className='bookcover' src={book.bookcover} alt='book cover'></img></td>
                <td>{book.category}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.shelfno}</td>
                <td>{book.isbn}</td>
                <td>
                  <button onClick={() => setEditBook(book)}>EDIT</button>
                  <button onClick={() => handleDeleteBook(book._id, book.booktitle)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editBook && (
        <>
        <h1 className='editbooktitle'>EDIT BOOK</h1>
        <div className='allbookctn'>
          <div className='allbookctn1'>
          <label>Book Title</label>
          <input
            className='inputbooktitle'
            type="text"
            placeholder="Book Title"
            value={editBook.booktitle}
            required
            onChange={(e) => setEditBook({...editBook, booktitle: e.target.value})}
          />
          <label>Book Description</label>
          <textarea
            className='textareabookdesc'
            type="text"
            placeholder="Book Description"
            value={editBook.bookdesc}
            required
            maxLength="150"
            onChange={(e) => setEditBook({...editBook, bookdesc: e.target.value})}
          />
          <label>Book Cover</label>
          <input
            type="text"
            placeholder="Book Cover"
            value={editBook.bookcover}
            required
            onChange={(e) => setEditBook({...editBook, bookcover: e.target.value})}
          />
          </div>

          <div className='allbookctn2'>
          <label>Category</label>
          <select value={editBook.category} onChange={(e) => setEditBook({...editBook, category: e.target.value})}>
            <option value="" disabled>Select Category</option>
            <option>General Knowledge</option>
            <option>Philosophy and Psychology</option>
            <option>Religion</option>
            <option>Social Sciences</option>
            <option>Languages</option>
            <option>Science</option>
            <option>Technology</option>
            <option>Arts and Recreation</option>
            <option>Literature</option>
            <option>History and Geography</option>
          </select>

          <label>Author</label>
          <input
            type="text"
            placeholder="Author"
            value={editBook.author}
            required
            onChange={(e) => setEditBook({...editBook, author: e.target.value})}
          />
          <label>Publisher</label>
          <input
            type="text"
            placeholder="Publisher"
            value={editBook.publisher}
            required
            onChange={(e) => setEditBook({...editBook, publisher: e.target.value})}
          />
          <label>Shelf No.</label>
          <input
            type="number"
            min="0"
            placeholder="Shelf No."
            value={editBook.shelfno}
            required
            onChange={(e) => setEditBook({...editBook, shelfno: e.target.value})}
          />
          <label>ISBN</label>
          <input
            type="number"
            min="0"
            maxLength={13}
            placeholder="ISBN"
            value={editBook.isbn}
            required
            onChange={(e) => setEditBook({...editBook, isbn: e.target.value})}
          />
          </div>
        </div>
        <div className='allbookbtnctn'>
          <button className='editbookbtn' onClick={() => handleEditBook(editBook._id)}>UPDATE</button>
          <button className='cancelbtn' onClick={() => setEditBook(null)}>CANCEL</button>
          </div>
        </>
      )}
    </>
  );
};

export default AddBook;
