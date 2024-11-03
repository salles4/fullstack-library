import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useParams, useLocation } from 'react-router-dom';
import bgImagee2 from "../steph/AboutPageComponents/bgg.png";

const bgImage2 = {
    backgroundImage: `url(${bgImagee2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};
const DeleteBook = () => {

    const [delBookTitle, getBookTitle] = useState('');

    const navigate = useNavigate();
    const [books, setBooks] = useState ([]);

    const { id } = useParams();

    const location = useLocation();
    const [deleteBook, setDeleteBook] = useState(location.state?.book || null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try{
                const response = await axios.get(`http://localhost:8000/api/getBooks/${id}`);
                console.log(response.data);
                setDeleteBook(response.data);
            }catch(error){
                console.error("Error fetching book details", error);
                alert("Failed to get Book Details");
            }
        };
    }, [id, deleteBook]);

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
    
    const handleDeleteBook = (id, booktitle) => {

        console.log(booktitle)

        if(delBookTitle === ""){
            alert("Please enter a book title!")
            return;
        }

        if(booktitle === delBookTitle){
            axios.delete(`http://localhost:8000/api/deleteBooks/${id}`)
                .then(() => {
                    navigate('/home')
                    alert("Book "+booktitle+" has been successfully deleted")
                })
                .catch((error) => {
                    console.log(error);
                });
        }else{
            alert("Book Title does not match! Please try again")
            return;
        }

        
    };

    const cancelBtnFunc = () => {
        navigate(-1);
    }

    return(
        <>
        <main style={bgImage2} className="min-h-screen flex items-center justify-center">
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
                <h1 className="text-2xl font-bold mb-4 text-center">Book Deletion</h1>
                <label>{`Enter book title "${deleteBook.booktitle}" to confirm deletion`}</label>
                <input
                    type="text"
                    onChange={(e) => getBookTitle(e.target.value)}
                    className="border rounded p-2 w-full mb-4"
                />
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => handleDeleteBook(deleteBook._id, deleteBook.booktitle)}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                    <button
                        onClick={cancelBtnFunc}
                        className="bg-gray-300 text-black py-2 px-4 rounded ml-2 hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </main>
            
        </>
    )
}

export default DeleteBook