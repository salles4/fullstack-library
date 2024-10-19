import { NavLink, Route, Routes } from "react-router-dom"
import Francis from "./cis/Francis";
import Stephanie from "./steph/Stephanie";
import AddBook from "./josh/AddBook";
import Jerome from "./jerome/Jerome";
import Author from "./josh/AddAuthor";


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


      </div>
      <hr />

      <Routes>
        <Route path="/steph" element={<Stephanie />} />
        <Route path="/josh/" element={<></>} />
        <Route path="/jerome" element={<Jerome />} />
        <Route path="/cis" element={<Francis />} />

        <Route path="/josh/addBook" element={<AddBook />} />
        <Route path="/josh/AddAuthor" element={<Author />} />


        <Route path="/" element={<>Home</>} />
        <Route path="/books" element={<>books</>} />
        <Route path="/authors" element={<>authors</>} />
        <Route path="/category" element={<>category</>} />
        <Route path="/book/:id" element={<>book</>} />
      </Routes>

      <footer></footer>
    </>
  );
}

export default App
