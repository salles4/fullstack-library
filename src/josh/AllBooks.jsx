import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';


const AddBook = () => {

  const navigate = useNavigate();
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

  // const handleDeleteBook = (id, booktitle) => {

  //   const delConf = prompt("Enter book title to confirm book deletion (case-sensitive):")

  //   if(delConf === booktitle){
  //     axios.delete(`http://localhost:8000/api/deleteBooks/${id}`)
  //       .then(() => {
  //       fetchBooks();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //     alert("Book Deletion of "+booktitle+" Successful!")
  //   }else{
  //     alert("Book Deletion Unsuccessful!")
  //   }
  // };

  const toUpdateBook = (book) => {
    navigate(`/josh/UpdateBook/${book._id}`, { state: { book } });
  };

  const toDeleteBook = (book) => {
    navigate(`/josh/DeleteBook/${book._id}`, { state: { book } });
  }

  return (
    <>
      <main >
        <section className="container mx-auto p-5  min-h-screen">
          <h1 className='text-3xl font-bold text-center mb-5 text-white'>BOOKS LIST</h1>
          <div className='overflow-x-auto shadow-md rounded-lg'>
            <table className='min-w-full bg-white'>
              <thead className='bg-red-950 text-white'>
                <tr>
                  <th className='py-3 px-4'>Title</th>
                  <th className='py-3 px-4'>Description</th>
                  <th className='py-3 px-4'>Cover</th>
                  <th className='py-3 px-4'>Category</th>
                  <th className='py-3 px-4'>Author</th>
                  <th className='py-3 px-4'>Publisher</th>
                  <th className='py-3 px-4'>Shelf No.</th>
                  <th className='py-3 px-4'>ISBN</th>
                  <th className='py-3 px-4'>Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book._id} className='border-b'>
                    <td className='py-2 px-4'>{book.booktitle}</td>
                    <td className='py-2 px-4'>{book.bookdesc}</td>
                    <td className='py-2 px-4'><img className='bookcover' src={book.bookcover} alt='book cover' /></td>
                    <td className='py-2 px-4'>{book.category}</td>
                    <td className='py-2 px-4'>{book.author}</td>
                    <td className='py-2 px-4'>{book.publisher}</td>
                    <td className='py-2 px-4'>{book.shelfno}</td>
                    <td className='py-2 px-4'>{book.isbn}</td>
                    <td className='py-2 px-4'>
                      <button onClick={() => toUpdateBook(book)} className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">EDIT</button>
                      <button onClick={() => toDeleteBook(book)} className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 ml-2">DELETE</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* <section className="container p-5  min-h-screen">
          {editBook && (
            <div className="container p-5 " >
            <h1 className="text-3xl font-bold mb-6 text-center text-white"> Edit Book</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5  p-6 rounded-lg shadow-xl shadow-gray-950 bg-white'>
              <div>
                  <label className='block mb-1'>Book Title</label>
                  <input
                    className='border rounded-lg w-full p-2'
                    type="text"
                    placeholder="Book Title"
                    value={editBook.booktitle}
                    required
                    onChange={(e) => setEditBook({...editBook, booktitle: e.target.value})}
                  />
                </div>
                <div>
                  <label className='block mb-1'>Book Description</label>
                  <textarea
                    className='border rounded-lg w-full p-2'
                    placeholder="Book Description"
                    value={editBook.bookdesc}
                    required
                    maxLength="150"
                    onChange={(e) => setEditBook({...editBook, bookdesc: e.target.value})}
                  />
                </div>
                <div>
                  <label className='block mb-1'>Book Cover</label>
                  <input
                    type="text"
                    className='border rounded-lg w-full p-2'
                    placeholder="Book Cover URL"
                    value={editBook.bookcover}
                    required
                    onChange={(e) => setEditBook({...editBook, bookcover: e.target.value})}
                  />
                </div>
                <div>
                  <label className='block mb-1'>Category</label>
                  <select
                    className='border rounded-lg w-full p-2'
                    value={editBook.category}
                    onChange={(e) => setEditBook({...editBook, category: e.target.value})}>
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
                </div>
                <div>
                  <label className='block mb-1'>Author</label>
                  <input
                    type="text"
                    className='border rounded-lg w-full p-2'
                    placeholder="Author"
                    value={editBook.author}
                    required
                    onChange={(e) => setEditBook({...editBook, author: e.target.value})}
                  />
                </div>
                <div>
                  <label className='block mb-1'>Publisher</label>
                  <input
                    type="text"
                    className='border rounded-lg w-full p-2'
                    placeholder="Publisher"
                    value={editBook.publisher}
                    required
                    onChange={(e) => setEditBook({...editBook, publisher: e.target.value})}
                  />
                </div>
                <div>
                  <label className='block mb-1'>Shelf No.</label>
                  <input
                    type="number"
                    className='border rounded-lg w-full p-2'
                    min="0"
                    placeholder="Shelf No."
                    value={editBook.shelfno}
                    required
                    onChange={(e) => setEditBook({...editBook, shelfno: e.target.value})}
                  />
                </div>
                <div>
                  <label className='block mb-1'>ISBN</label>
                  <input
                    type="number"
                    className='border rounded-lg w-full p-2'
                    min="0"
                    maxLength={13}
                    placeholder="ISBN"
                    value={editBook.isbn}
                    required
                    onChange={(e) => setEditBook({...editBook, isbn: e.target.value})}
                  />
                </div>
              </div>
              <div className='flex justify-center mt-4'>
                <button className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700' onClick={() => handleEditBook(editBook._id)}>UPDATE</button>
                <button className='bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 ml-2' onClick={() => setEditBook(null)}>CANCEL</button>
              </div>
            </div>
          )}
        </section> */}
      </main>
    </>
  );
};

export default AddBook;
