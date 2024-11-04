import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import bgImagee2 from "../steph/AboutPageComponents/bgg.png";
import AllBooks from "./AllBooks/"

const bgImage2 = {
  backgroundImage: `url(${bgImagee2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const AddBook = () => {

  const navigate = useNavigate();
  
  const [books, setBooks] = useState([]); 
  const [newBook, setNewBook] = useState({
    booktitle: '', 
    bookdesc: '', 
    bookcover: '', 
    category: '', 
    author: '', 
    publisher: '', 
    shelfno: '', 
    isbn: ''
  });
  
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

  //checks if book title already exists in the databse
  const bookChk = books.some(book => book.booktitle === newBook.booktitle);

  const handleCreateBook = () => {

    if(newBook.booktitle === "" || newBook.bookdesc === "" || newBook.bookcover === "" || newBook.category === "" || newBook.author === "" 
      || newBook.publisher === "" || newBook.shelfno === "" || newBook.isbn === ""){
        alert("Please complete all required fields! (*)");
      return;
    }
    
    if(bookChk){
      alert("Book Title already exists in the Database!")
      clearEntries();
      return;
    }

    
    axios.post("http://localhost:8000/api/createBooks", newBook)
      .then(() => {
        fetchBooks();
        alert(`The book "${newBook.booktitle}" has been added successfully`)
        setNewBook({
          booktitle: '', 
          bookdesc: '', 
          bookcover: '', 
          category: '', 
          author: '', 
          publisher: '', 
          shelfno: '', 
          isbn: '' 
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const clearEntries = () => {
    setNewBook({booktitle: '', bookdesc: '', bookcover: '', category: '', author: '', publisher: '', shelfno: '', isbn: ''})
  }

  const cancelFunc = () => {
    navigate('/home');
  }

  return( 
    <main style={bgImage2} className="min-h-screen w-full  ">
      <section className='container p-5  min-h-screen'>
        <div className="container p-5 min-h-[750px] mx-auto " >
          <h1 className="text-3xl font-bold mb-6 text-center text-white mt-10">Add Book</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5  p-6 rounded-lg shadow-xl shadow-gray-950 bg-white'>
            <div>
              <label className='block mb-2 '>Book Title</label>
              <input
                className='border rounded-lg w-full p-2'
                type="text"
                placeholder="Book Title*"
                value={newBook.booktitle}
                required
                onChange={(e) => setNewBook({...newBook, booktitle: e.target.value})}
              />
            </div>
            <div>
              <label className='block mb-2 '>Book Description</label>
              <textarea
                className='border rounded-lg w-full p-2'
                placeholder="Book Description*"
                value={newBook.bookdesc}
                required
                maxLength="300"
                onChange={(e) => setNewBook({...newBook, bookdesc: e.target.value})}
              />
            </div>
            <div>
              <label className='block mb-2 '>Book Cover</label>
              <input
                className='border rounded-lg w-full p-2'
                type="text"
                placeholder="Book Cover URL*"
                value={newBook.bookcover}
                required
                onChange={(e) => setNewBook({...newBook, bookcover: e.target.value})}
              />
            </div>
            <div>
              <label className='block mb-2 '>Category</label>
              <select 
                className='border rounded-lg w-full p-2'
                value={newBook.category} 
                onChange={(e) => setNewBook({...newBook, category: e.target.value})}>
                <option value="" disabled>Select Category*</option>
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
              <label className='block mb-2 '>Author</label>
              <input
                className='border rounded-lg w-full p-2'
                type="text"
                placeholder="Author*"
                value={newBook.author}
                required
                onChange={(e) => setNewBook({...newBook, author: e.target.value})}
              />
            </div>
            <div>
              <label className='block mb-2 '>Publisher</label>
              <input
                className='border rounded-lg w-full p-2'
                type="text"
                placeholder="Publisher*"
                value={newBook.publisher}
                required
                onChange={(e) => setNewBook({...newBook, publisher: e.target.value})}
              />
            </div>
            <div>
              <label className='block mb-2 '>Shelf No.</label>
              <input
                className='border rounded-lg w-full p-2'
                type="number"
                min="0"
                placeholder="Shelf No.*"
                value={newBook.shelfno}
                required
                onChange={(e) => setNewBook({...newBook, shelfno: e.target.value})}
              />
            </div>
            <div>
              <label className='block mb-2 '>ISBN</label>
              <input
                className='border rounded-lg w-full p-2'
                type="text"
                maxLength={13}
                placeholder="ISBN*"
                value={newBook.isbn}
                required
                onChange={(e) => setNewBook({...newBook, isbn: e.target.value})}
              />
            </div>
          </div>
          
          <div className='flex justify-center items-center gap-2 mt-4'>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200" onClick={handleCreateBook}>
                Submit
            </button>
            <button className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-200" onClick={clearEntries}>
                Reset
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200" onClick={cancelFunc}>
                Cancel
            </button>
          </div>
        </div>
      </section>

      <section>
        <AllBooks/>
      </section>
    </main>
  );
}

export default AddBook;
