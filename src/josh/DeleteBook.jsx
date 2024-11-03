import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useParams, useLocation } from 'react-router-dom';

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
            <h1>BOOK DELETION</h1>
            <label>{`Enter book title "${deleteBook.booktitle}" to confirm deletion`}</label>
            <input
                type="text"
                onChange={(e) => {getBookTitle(e.target.value)}}
            />
            <button onClick={() => handleDeleteBook(deleteBook._id, deleteBook.booktitle)}>Delete</button>
            <button onClick={cancelBtnFunc}>Cancel</button>
        </>
    )
}

export default DeleteBook