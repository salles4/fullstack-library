import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom'; 
import bgImagee2 from "../steph/AboutPageComponents/bgg.png";

const bgImage2 = {
    backgroundImage: `url(${bgImagee2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const UpdateBook = () => {

    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const { id } = useParams();
    const location = useLocation();
    const [editBook, setEditBook] = useState(location.state?.book || null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try{
                const response = await axios.get(`http://localhost:8000/api/getBooks/${id}`);
                console.log(response.data);
                setEditBook(response.data);
            } catch(error){
                console.error("Error fetching book details", error);
                alert("Failed to get Book Details");
            }
        };
    }, [id, editBook]);

    useEffect(() => {
        fetchBooks();
    }, []);
    
    const fetchBooks = () => {
     axios.get("http://localhost:8000/api/getBooks")
      .then((response) => {
            console.log(response.data);
            setBooks(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleEditBook = (id) => {

        axios.put(`http://localhost:8000/api/updateBooks/${id}`, editBook)
         .then(() => {
          fetchBooks();
          alert("Update Successful!")
          navigate('/josh/addBook')
        })
         .catch((error)=>{
          console.log(error);
          alert("Update Unsuccessful!")
        });
    };

    const cancelBtnFunc = () => {
        navigate('/josh/addBook');
    }

    return(
        <>
        <main style={bgImage2} className="min-h-screen w-full">
            <section className='container p-5 min-h-screen'>
                <div className=" mx-auto p-5">
                    <h1 className="text-3xl font-bold mb-6 text-center text-white mt-10">Update Book</h1>
                    {editBook && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-6 rounded-lg shadow-xl shadow-gray-950 bg-white'>
                            <div>
                                <label className='block mb-1'>Book Title</label>
                                <input
                                    className='border rounded-lg w-full p-2'
                                    type="text"
                                    placeholder="Book Title"
                                    value={editBook.booktitle}
                                    onChange={(e) => setEditBook({ ...editBook, booktitle: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Book Description</label>
                                <textarea
                                    className='border rounded-lg w-full p-2'
                                    placeholder="Book Description"
                                    value={editBook.bookdesc}
                                    maxLength="150"
                                    onChange={(e) => setEditBook({ ...editBook, bookdesc: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Book Cover</label>
                                <input
                                    className='border rounded-lg w-full p-2'
                                    type="text"
                                    placeholder="Book Cover URL"
                                    value={editBook.bookcover}
                                    onChange={(e) => setEditBook({ ...editBook, bookcover: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Category</label>
                                <select
                                    className='border rounded-lg w-full p-2'
                                    value={editBook.category}
                                    onChange={(e) => setEditBook({ ...editBook, category: e.target.value })}>
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
                                    onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Publisher</label>
                                <input
                                    type="text"
                                    className='border rounded-lg w-full p-2'
                                    placeholder="Publisher"
                                    value={editBook.publisher}
                                    onChange={(e) => setEditBook({ ...editBook, publisher: e.target.value })}
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
                                    onChange={(e) => setEditBook({ ...editBook, shelfno: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>ISBN</label>
                                <input
                                    type="number"
                                    className='border rounded-lg w-full p-2'
                                    min="0"
                                    placeholder="ISBN"
                                    value={editBook.isbn}
                                    onChange={(e) => setEditBook({ ...editBook, isbn: e.target.value })}
                                />
                            </div>
                           
                        </div>
                    )}    
                </div>
                    <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                        <button
                            className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700'
                            onClick={() => handleEditBook(editBook._id)}>
                            UPDATE
                        </button>
                        <button
                            className='bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 ml-2'
                            onClick={cancelBtnFunc}>
                            CANCEL
                        </button>
                    </div>
            </section>
        </main>  
        </>
    )
}

export default UpdateBook