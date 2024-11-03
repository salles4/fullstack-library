import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useParams, useLocation } from 'react-router-dom';

const UpdateAuthor = () => {

    const navigate = useNavigate();
    const [author, setAuthor] = useState([]);

    const { id } = useParams();

    const location = useLocation();
    const [editAuthor, setEditAuthor] = useState(location.state?.author || null);

    useEffect(() => {
        const fetchAuthorDetails = async () => {
            try{
                const response = await axios.get(`http://localhost:8000/api/getAuthors/${id}`);
                console.log(response.data);
                setEditAuthor(response.data);
            }catch(error){
                console.error("Error fetching author details", error);
                alert("Failed to get author details :(")
            }
        };
    }, [id, editAuthor]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        axios.get("http://localhost:8000/api/getAuthors")
         .then((response) => {
            console.log(response.data);
            setAuthor(response.data);
         })
         .catch((error)=> {
            console.log(error);
         });
    };

    const handleEditAuthor = (id) => {
        axios.put(`http://localhost:8000/api/updateAuthors/${id}`, editAuthor)
         .then(() => {
            fetchAuthors();
            alert("Update Successful!")
            navigate(`/author/overview/${id}`)
         })
         .catch((error)=>{
            console.log(error);
            alert("Update Unsuccessfull!")
         });
    };

    const cancelBtnFunc = () => {
        navigate(`/author/overview/${id}`)
    }

    return(
        <div>
            <h1>EDIT AUTHOR</h1>
            {editAuthor && (
                <div>
                    <div>
                        <label>Author Name</label>
                        <input
                            type="text"
                            placeholder="Author Name"
                            value={editAuthor.name}
                            onChange={(e) => setEditAuthor({...editAuthor, name: e.target.value})}
                        />
                        <label>Author Bio</label>
                        <textarea
                            type="text"
                            placeholder='Author Bio'
                            value={editAuthor.bio}
                            onChange={(e) => setEditAuthor({...editAuthor, bio: e.target.value})}
                        />
                        <label>Author Link</label>
                        <input
                            type="text"
                            placeholder="Author Link"
                            value={editAuthor.link}
                            onChange={(e) => setEditAuthor({...editAuthor, link: e.target.value})}
                        />
                        <label>Author Picture</label>
                        <input
                            type="text"
                            placeholder="Author Picture"
                            value={editAuthor.picture}
                            onChange={(e) => setEditAuthor({...editAuthor, picture: e.target.value})}
                        />
                    </div>
                    <div>
                        <button onClick={() => handleEditAuthor(editAuthor._id)}>Update</button>
                        <button onClick={cancelBtnFunc}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UpdateAuthor