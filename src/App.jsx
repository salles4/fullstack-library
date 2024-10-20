import { NavLink, Route, Routes } from "react-router-dom"
import Francis from "./cis/Francis";

import HomePage from './steph/HomePageComponents/HomePage/HomePage'
import BooksPage from './steph/BooksPageComponents/BooksPage'
import AuthorsPage from './steph/AuthorsPageComponents/AuthorsPage'


import AddBook from "./josh/AddBook";
import Jerome from "./jerome/Jerome";
import Author from "./josh/AddAuthor";
import UserLogin from "./jerome/UserLogin";
import UserRegister from "./jerome/UserRegister";


import AboutPage from "./steph/AboutPageComponents/AboutPage";


function App() {

  return (
    <>
      <header className="flex justify-center items-center gap-4 text-xl">
        <NavLink to="/steph">Stephanie</NavLink>
        <NavLink to="/josh">Joshua</NavLink>
        <NavLink to="/jerome">Jerome</NavLink>
        <NavLink to="/cis">Francis</NavLink>
      </header>
      <hr />
      <div className="flex justify-center items-center gap-4 text-xl py-3">
        
        {/* Dito mag-add ng links */}
        <NavLink to="/josh/addBook">Add Book</NavLink>
        <NavLink to="/josh/AddAuthor">Add Author</NavLink>

        <NavLink to="/jerome/userlogin">Login</NavLink>
        <NavLink to="/jerome/userregister">Register</NavLink>

        <NavLink to="/home">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/author">Author</NavLink>

        {/* New  */}
        <NavLink to="/about">About</NavLink>



      </div>
      <hr />

      <Routes>
        <Route path="/josh/AddAuthor" element={<Author />} />
        <Route path="/jerome" element={<Jerome />} />
        <Route path="/cis" element={<Francis />} />

        <Route path="/josh/addBook" element={<AddBook />} />
        <Route path="/josh/AddAuthor" element={<Author />} />

        <Route path="/jerome/userlogin" element={<UserLogin />} />
        <Route path="/jerome/userregister" element={<UserRegister />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/author" element={<AuthorsPage />} />

        {/* New  */}
        <Route path="/about" element={<AboutPage />} />


        


      </Routes>

      <footer></footer>
    </>
  );
}

export default App
