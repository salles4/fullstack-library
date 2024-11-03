import { Route, Routes, useLocation } from "react-router-dom";
import Francis from "./cis/Francis";
import HomePage from './steph/HomePageComponents/HomePage/HomePage';
import BooksPage from './steph/BooksPageComponents/ShowAllBooks';
import AuthorsPage from './steph/AuthorsPageComponents/ShowAllAuthors';
import AddBook from "./josh/AddBook";
import UpdateBook from "./josh/UpdateBook";
import DeleteBook from "./josh/DeleteBook";
import Jerome from "./jerome/Jerome";
import Author from "./josh/AddAuthor";
import DeleteAuthor from "./josh/DeleteAuthor";
import UpdateAuthor from "./josh/UpdateAuthor";
import AllBooks from "./josh/AllBooks";
import UserLogin from "./jerome/UserLogin";
import UserRegister from "./jerome/UserRegister";
import BookCategory from "./jerome/BookCategory";
import SearchTry from "./jerome/SearchTry";
import AboutPage from "./steph/AboutPageComponents/AboutPage";
import BookOverview from './steph/BookOverviewComponents/BookDetails';
import AuthorOverview from './steph/AuthorOverviewComponents/AuthorDetails';
import ContactUs from './steph/ContactUsPageComponents/ContactUs';
import { useEffect, useState } from "react";
import Navbar from "./steph/HomePageComponents/Navbar/Navbar";
import Error404 from "./cis/Error404";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [userLoggedIn, setUserLoggedIn] = useState(null);
  
  const handleStorageChange = () => {
    setUserLoggedIn(localStorage.getItem("username") || null)
  };

  useEffect(() => {
    const loggedUser = localStorage.getItem("username");
    setUserLoggedIn(loggedUser);

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const hideNavbarPaths = ["/jerome/userlogin", "/jerome/userregister"];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && (
        <Navbar
          userLoggedIn={userLoggedIn}
          handleStorageChange={handleStorageChange}
        />
      )}
      <h1 className="text-white absolute top-0 left-0 z-50">{userLoggedIn}</h1>
      <Routes>
        {!userLoggedIn ? (
          <>
            {/* Guest Routes */}
            <Route path="/jerome/userlogin" element={<UserLogin handleStorageChange={handleStorageChange} />}
            />
            <Route path="/jerome/userregister" element={<UserRegister />} />
          </>
          ):
          <>
            {/* Admin Routes */}
            <Route path="/josh/AddAuthor" element={<Author />} />
            <Route path="/josh/addBook" element={<AddBook />} />
            <Route path="/josh/UpdateBook/:id" element={<UpdateBook/>} />
            <Route path="/josh/DeleteBook/:id" element={<DeleteBook/>} />
            <Route path="/josh/DeleteAuthor/:id" element={<DeleteAuthor/>} />
            <Route path="/josh/UpdateAuthor/:id" element={<UpdateAuthor/>} />
          </>
        }

        <Route path="/home" element={<HomePage userLoggedIn={userLoggedIn} />} />

        <Route path="/books" element={<BooksPage />} />
        <Route path="/author" element={<AuthorsPage />} />
        <Route path="/jerome/bookcategory" element={<BookCategory />} />

        <Route path="/book/overview/:id" element={<BookOverview userLoggedIn={userLoggedIn} />} />
        <Route path="/author/overview/:id" element={<AuthorOverview userLoggedIn={userLoggedIn} />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts/us" element={<ContactUs userLoggedIn={userLoggedIn}/>} />

        {/* Unused Routes */}
        <Route path="/josh/AllBooks" element={<AllBooks />} />
        <Route path="/jerome/searchy" element={<SearchTry />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

      <footer></footer>
    </>
  );
}

export default App;
