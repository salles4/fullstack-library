import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Author = () =>{

    const [authors, setAuthors] = useState([]);
    const [newAuthor, setNewAuthor] = useState({});

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        axios.get("http://localhost:8000/api/getAuthors")
        .then((response) => {
          console.log(response.data)
          setAuthors(response.data)
        })
        .catch((error)=>{
          console.log(error);
        });
    }

    const handleCreateAuthor = () => {
        axios.post("http://localhost:8000/api/createAuthors", newAuthor)
         .then(() =>{
            fetchAuthors();
            setNewAuthor({ name: '', bio: '', link: '', picture: ''})
         })
         .catch((error) => {
            console.log(error);
         });
    };

    return(
        <>
        <h1>Add Author</h1>
        <input
            type="text"
            placeholder="Author Name"
            value={newAuthor.name}
            required
            onChange={(e)=> setNewAuthor({...newAuthor, name: e.target.value})}
        />
        <textarea
            type="text"
            placeholder="Author Bio"
            value={newAuthor.bio}
            required
            onChange={(e)=> setNewAuthor({...newAuthor, bio: e.target.value})}
        />
        <input
            type="text"
            placeholder="Author Link"
            value={newAuthor.link}
            required
            onChange={(e)=> setNewAuthor({...newAuthor, link: e.target.value})}
        />
        <input
            type="text"
            placeholder="Author Picture"
            value={newAuthor.picture}
            required
            onChange={(e)=> setNewAuthor({...newAuthor, picture: e.target.value})}
        />
        <button onClick={handleCreateAuthor}>Add Author</button>
        
        <h1>Author List</h1>
            <ul>
                {authors.map(author => (
                    <li key={author._id}>{author.name} {author.bio} {author.link} {author.picture}</li>
                ))}
            </ul>
        
        </>
    );
};
export default Author