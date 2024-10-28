import { NavLink, Route, Routes } from "react-router-dom"
import Francis from "./cis/Francis";

import HomePage from './steph/HomePageComponents/HomePage/HomePage'
import BooksPage from './steph/BooksPageComponents/ShowAllBooks' //new for automatic featured books
import AuthorsPage from './steph/AuthorsPageComponents/AuthorsPage'


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
        <NavLink to="/josh/AllBooks">All Books</NavLink>
        
        <NavLink to="/jerome/userlogin">Login</NavLink>
        <NavLink to="/jerome/userregister">Register</NavLink>

        <NavLink to="/jerome/bookcategory">BookCategory</NavLink>

        {/*---------------- TRIAL --------------------*/}
          <NavLink to="/jerome/searchy">Searchy</NavLink>
        {/*-----------------------------------------------*/}

        <NavLink to="/home">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/author">Author</NavLink>

        {/* New  */}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/book/overview">BookOverview</NavLink>
        <NavLink to="/author/overview">AuthorOverview</NavLink>

        <NavLink to="/contacts/us">ContactUs</NavLink>

      </div>
      <hr />

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

        {/*---------------- TRIAL --------------------*/}
          <Route path="/jerome/searchy" element={<SearchTry />} />
        {/*-----------------------------------------------*/}

        <Route path="/home" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/author" element={<AuthorsPage />} />

        {/* New  */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book/overview/:id" element={<BookOverview />} />
        <Route path="/author/overview" element={<AuthorOverview />} />
          
        <Route path="/contacts/us" element={<ContactUs />} />


      </Routes>

      <footer></footer>
    </>
  );
}

export default App
