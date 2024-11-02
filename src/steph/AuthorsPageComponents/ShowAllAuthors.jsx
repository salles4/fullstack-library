
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AuthorsPage from './AuthorsPage';
import Footer from '../HomePageComponents/Footer/Footer';
import { Link } from 'react-router-dom'





const ShowAllBooks = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        axios
        .get("http://localhost:8000/api/getAuthors")
        .then((response) => {
            console.log(response.data);
            setAuthors(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
   
    return (
        <>
        <AuthorsPage authors={authors} />

        <div className='container '>
            <div className='text-center font-bold text-3xl mt-10 mb-[150px]  '>
                <h1>More Authors</h1>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {authors.map((author) => (
                    <Link to={`/author/overview/${author._id}`} >
                        <div className= " bg-slate-50 drop-shadow-xl rounded-xl sm:min-w-[250px]  transition-transform transform hover:scale-105 hover:bg-gray-100 group max-w-[420px] mb-[100px]">
                            <div key={author.id} className='h-[150px] '> 
                                <img src={author.picture} 
                                alt={author.name} 
                                className="block mx-auto transform -translate-y-[100px]  h-60 object-contain" />
                            </div>
                            <div className='p-3 text-center text-black overflow-hidden text-ellipsis'>
                                <p className="text-lg font-bold ">{author.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>  
        <Footer/>

        </>
      );
}

export default ShowAllBooks
