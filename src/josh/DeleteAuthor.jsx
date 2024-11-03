import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useParams, useLocation } from 'react-router-dom';

const DeleteAuthor  = () => {

    const [delAuthorName, getAuthorName] = useState('');

    const navigate = useNavigate();
    const [author, setAuthor] = useState ([]);

    const { id } = useParams();

    const location = useLocation();
    const [deleteAuthor, setDeleteAuthor] = useState(location.state?.author || null);

    useEffect(() => {
        const fetchAuthorDetails = async () => {
            try{
                const response = await axios.get(`http://localhost:8000/api/getAuthors/${id}`);
                console.loge(response.data);
                setDeleteAuthor(response.data);
            }catch(error){
                console.error("Error fetching author details", error);
                alert("Failed to get author details :(")
            }
        };
    }, [id, deleteAuthor]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        axios.get("http://localhost:8000/api/getAuthors")
         .then((response) => {
            console.log(response.data);
            setAuthor(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
    };

    const handleDeleteAuthor = (id, name) => {
        
        console.log(name)

        if(delAuthorName === ""){
            alert("Please enter an author name")
            return;
        }

        if(name === delAuthorName){
            axios.delete(`http://localhost:8000/api/deleteAuthors/${id}`)
             .then(() => {
                fetchAuthors();
                alert("Author "+name+" has been successfully deleted");
                navigate('/home');
             })
             .catch((error) => {
                console.log(error);
             });
        }else{
            alert("Author name does not match! Please try again")
            return;
        };
    };

    const cancelBtnFunc = () => {
        navigate(`/author/overview/${id}`)
    }

    return(
        <div>
            <h1>AUTHOR DELETION</h1>
            <label>{`Enter author name "${deleteAuthor.name}" to confirm deletion`}</label>
            <input
                type="text"
                onChange={(e) => {getAuthorName(e.target.value)}}
            />
            <button onClick={() => handleDeleteAuthor(deleteAuthor._id, deleteAuthor.name)}>Delete</button>
            <button onClick={cancelBtnFunc}>Cancel</button>
        </div>
    )
}

export default DeleteAuthor