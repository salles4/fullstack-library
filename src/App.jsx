import { Route, Routes, useLocation } from "react-router-dom";
import Francis from "./cis/Francis";
import HomePage from './steph/HomePageComponents/HomePage/HomePage';
import BooksPage from './steph/BooksPageComponents/ShowAllBooks';
import AuthorsPage from './steph/AuthorsPageComponents/ShowAllAuthors';
import AddBook from "./josh/AddBook";
import Jerome from "./jerome/Jerome";
import Author from "./josh/AddAuthor";
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
    setUserLoggedIn(localStorage.getItem("username"));
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
        <Route path="/josh/AddAuthor" element={<Author />} />
        <Route path="/jerome" element={<Jerome />} />
        <Route path="/cis" element={<Francis />} />
        <Route path="/josh/addBook" element={<AddBook />} />
        <Route path="/josh/AllBooks" element={<AllBooks />} />

        {!userLoggedIn && (
          <>
            <Route
              path="/jerome/userlogin"
              element={<UserLogin handleStorageChange={handleStorageChange} />}
            />
            <Route path="/jerome/userregister" element={<UserRegister />} />
          </>
        )}
        
        <Route path="/jerome/bookcategory" element={<BookCategory />} />
        <Route path="/jerome/searchy" element={<SearchTry />} />
        <Route path="/home" element={<HomePage userLoggedIn={userLoggedIn} />} />
        <Route path="/books" element={<BooksPage userLoggedIn={userLoggedIn} />} />
        <Route path="/author" element={<AuthorsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/book/overview/:id" element={<BookOverview />} />
        <Route path="/author/overview/:id" element={<AuthorOverview />} />
        <Route path="/contacts/us" element={<ContactUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <footer></footer>
    </>
  );
}

export default App;
