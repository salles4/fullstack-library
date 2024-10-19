import { NavLink, Route, Routes } from "react-router-dom"
import Francis from "./cis/Francis";
import Stephanie from "./steph/Stephanie";
import Joshua from "./josh/Joshua";
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
      
      <Routes>
        {/* To be removed */}
        <Route path="/steph" element={<Stephanie />} />
        <Route path="/josh" element={<Joshua />} />
        <Route path="/josh/AddAuthor" element={<Author />} />
        <Route path="/jerome" element={<Jerome />} />
        <Route path="/cis" element={<Francis />} />
        {/*               */}

        <Route path="/" element={<>Home</>} />
        <Route path="/books" element={<>books</>} />
        <Route path="/authors" element={<>authors</>} />
        <Route path="/category" element={<>category</>} />
        <Route path="/book/:id" element={<>book</>} />
      </Routes>

      <footer>

      </footer>
    </>
  );
}

export default App
