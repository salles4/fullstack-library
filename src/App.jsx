import { NavLink, Route, Routes, useLocation } from "react-router-dom"
import Francis from "./cis/Francis";

import HomePage from './steph/HomePageComponents/HomePage/HomePage'
import BooksPage from './steph/BooksPageComponents/ShowAllBooks' //new for automatic featured books
import AuthorsPage from './steph/AuthorsPageComponents/ShowAllAuthors'  //new for automatic featured authors


import AddBook from "./josh/AddBook";
import Jerome from "./jerome/Jerome";
import Author from "./josh/AddAuthor";
import AllBooks from "./josh/AllBooks";


//---------- Kay jerome
import UserLogin from "./jerome/UserLogin";
import UserRegister from "./jerome/UserRegister";

import BookCategory from "./jerome/BookCategory";

import SearchTry from "./jerome/SearchTry";

//----------------------------------------------

// new
import AboutPage from "./steph/AboutPageComponents/AboutPage";
import BookOverview from './steph/BookOverviewComponents/BookDetails';
import AuthorOverview from './steph/AuthorOverviewComponents/AuthorDetails';

import ContactUs from './steph/ContactUsPageComponents/ContactUs';
import { useEffect, useState } from "react";
import Navbar from "./steph/HomePageComponents/Navbar/Navbar";



function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location]);


  const [userLoggedIn, setUserLoggedIn] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("username");
    setUserLoggedIn(loggedUser);

    const handleStorageChange = (event) => {
      if (event.key === "username") {
        setUserLoggedIn(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  return (
    <>
      {/* <div className="flex justify-center items-center gap-4 text-xl py-3">
        
        <NavLink to="/josh/addBook">Add Book</NavLink>
        <NavLink to="/josh/AddAuthor">Add Author</NavLink>
        <NavLink to="/josh/AllBooks">All Books</NavLink>
        
        <NavLink to="/jerome/userlogin">Login</NavLink>
        <NavLink to="/jerome/userregister">Register</NavLink>

        <NavLink to="/jerome/bookcategory">BookCategory</NavLink>

       
          <NavLink to="/jerome/searchy">Searchy</NavLink>
        

        <NavLink to="/home">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/author">Author</NavLink>

        <NavLink to="/about">About</NavLink>
        <NavLink to="/book/overview">BookOverview</NavLink>
        <NavLink to="/author/overview">AuthorOverview</NavLink>

        <NavLink to="/contacts/us">ContactUs</NavLink>

      </div>
      <hr /> */}
      <Navbar />
      <h1 className="text-white absolute top-0 left-0 z-50">{userLoggedIn}</h1>
      <Routes>
        <Route path="/josh/AddAuthor" element={<Author />} />
        <Route path="/jerome" element={<Jerome />} />
        <Route path="/cis" element={<Francis />} />

        <Route path="/josh/addBook" element={<AddBook />} />
        <Route path="/josh/AddAuthor" element={<Author />} />
        <Route path="/josh/AllBooks" element={<AllBooks />} />

        <Route path="/jerome/userlogin" element={<UserLogin />} />
        <Route path="/jerome/userregister" element={<UserRegister />} />
        <Route path="/jerome/bookcategory" element={<BookCategory />} />

        <Route path="/jerome/searchy" element={<SearchTry />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/author" element={<AuthorsPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/book/overview/:id" element={<BookOverview />} />
        <Route path="/author/overview/:id" element={<AuthorOverview />} />
          
        <Route path="/contacts/us" element={<ContactUs />} />
      </Routes>

      <footer></footer>
    </>
  );
}

export default App
