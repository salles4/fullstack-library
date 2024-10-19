import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Joshua = () => {

  //books, setBooks
  const [users, setUsers] = useState([]);
  //newBook, setNewBook
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    //fetchBooks();
    fetchUsers();
  }, []);

  //fetchBooks
  const fetchUsers = () => {
    axios.get("http://localhost:8000/api/getUsers")
    .then((response) => {
      console.log(response.data)
      setUsers(response.data)
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  const handleCreateUser = () => {
    axios.post("http://localhost:8000/api/createUsers", newUser)
     .then(() => {
      //fetchBooks;
      fetchUsers();
      //setNewBook
      setNewUser({ booktitle: '', bookdesc: '', bookcover: '', category: '', author: '', publisher: '', shelfno: '', isbn: '' })
     })
     .catch((error) =>{
      console.log(error);
     });
  };

  return( 
    <>
    <NavLink to="/josh/AddAuthor">CLICK ME FOR ADD AUTHOR PAGE</NavLink>
    <h2>Add Book Page</h2>
    <input
      type="text"
      placeholder="Book Title"
      value={newUser.booktitle}
      required
      onChange={(e) => setNewUser({...newUser, booktitle: e.target.value})}
    />
    <textarea
      type="text"
      placeholder="Book Description"
      value={newUser.bookdesc}
      required
      onChange={(e) => setNewUser({...newUser, bookdesc: e.target.value})}
    />
    <input
      type="text"
      placeholder="Book Cover"
      value={newUser.bookcover}
      required
      onChange={(e) => setNewUser({...newUser, bookcover: e.target.value})}
    />
    <input
      type="text"
      placeholder="Category"
      value={newUser.category}
      required
      onChange={(e) => setNewUser({...newUser, category: e.target.value})}
    />
    <input
      type="text"
      placeholder="Author"
      value={newUser.author}
      required
      onChange={(e) => setNewUser({...newUser, author: e.target.value})}
    />
    <input
      type="text"
      placeholder="Publisher"
      value={newUser.publisher}
      required
      onChange={(e) => setNewUser({...newUser, publisher: e.target.value})}
    />
    <input
      type="number"
      placeholder="Shelf No."
      value={newUser.shelfno}
      required
      onChange={(e) => setNewUser({...newUser, shelfno: e.target.value})}
    />
    <input
      type="number"
      placeholder="ISBN"
      value={newUser.isbn}
      required
      onChange={(e) => setNewUser({...newUser, isbn: e.target.value})}
    />
    <button onClick={handleCreateUser}>ADD BOOK BTN</button>


    <h1>User List</h1>
      <ul>
        {users.map(user => (
          
          <li key={user._id}>{user.booktitle} {user.bookdesc} {user.bookcover} {user.category} {user.author} {user.publisher} {user.shelfno} {user.isbn}</li>
        ))}
      </ul>
    </>
  )
}

export default Joshua;