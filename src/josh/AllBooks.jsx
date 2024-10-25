import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [books, setBooks] = useState([]);

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
      alert("Book Deletion Successful!")
    }else{
      alert("Book Deletion Unsuccessful!")
    }

    
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
                  <button>EDIT</button>
                  <button onClick={() => handleDeleteBook(book._id, book.booktitle)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default AddBook;
