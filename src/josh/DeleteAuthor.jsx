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
        <main style={bgImage2} className="min-h-screen flex items-center justify-center">
        <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h1 className="text-2xl font-bold mb-4 text-center">Author Deletion</h1>
            <p className="mb-4 text-gray-700">
                {`Enter author name "${deleteAuthor.name}" to confirm deletion:`}
            </p>
            <input
                type="text"
                onChange={(e) => getAuthorName(e.target.value)}
                className="border rounded-lg w-full p-2 mb-4"
                placeholder="Author Name"
            />
            <div className="flex justify-between mt-6">
                <button 
                    onClick={() => handleDeleteAuthor(deleteAuthor._id, deleteAuthor.name)} 
                    className='bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
                    Delete
                </button>
                <button 
                    onClick={cancelBtnFunc} 
                    className='bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition'>
                    Cancel
                </button>
            </div>
        </div>
    </main>
    )
}

export default DeleteAuthor