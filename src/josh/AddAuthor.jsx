import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bgImagee2 from "../steph/AboutPageComponents/bgg.png";

const bgImage2 = {
    backgroundImage: `url(${bgImagee2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const Author = () => {
    const [authors, setAuthors] = useState([]);
    const [newAuthor, setNewAuthor] = useState({ name: '', bio: '', link: '', picture: '' });

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        axios.get("http://localhost:8000/api/getAuthors")
            .then((response) => {
                console.log(response.data);
                setAuthors(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCreateAuthor = () => {
        axios.post("http://localhost:8000/api/createAuthors", newAuthor)
            .then(() => {
                fetchAuthors();
                setNewAuthor({ name: '', bio: '', link: '', picture: '' });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleReset = () => {
        setNewAuthor({ name: '', bio: '', link: '', picture: '' });
    };

    const handleCancel = () => {
        // Redirect or perform any action on cancel
        setNewAuthor({ name: '', bio: '', link: '', picture: '' });
    };

    return (
        <main style={bgImage2} className="min-h-screen w-full">
            <section className='container p-5'>
                <div className="container p-5 max-w-[800px] min-h-[750px] mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-white mt-10 ">Add Author</h1>
                <div className="bg-white p-6 rounded-lg mb-8 shadow-xl shadow-gray-950">
                        <label className="block mb-2 font-medium">Author Name</label>
                        <input
                            type="text"
                            placeholder="Author Name"
                            value={newAuthor.name}
                            required
                            onChange={(e) => setNewAuthor({ ...newAuthor, name: e.target.value })}
                            className="border rounded-lg w-full p-2 mb-4"
                        />
                        
                        <label className="block mb-2 font-medium">Author Bio</label>
                        <textarea
                            placeholder="Author Bio"
                            value={newAuthor.bio}
                            required
                            onChange={(e) => setNewAuthor({ ...newAuthor, bio: e.target.value })}
                            className="border rounded-lg w-full p-2 mb-4"
                        />
                        
                        <label className="block mb-2 font-medium">Author Link</label>
                        <input
                            type="text"
                            placeholder="Author Link"
                            value={newAuthor.link}
                            required
                            onChange={(e) => setNewAuthor({ ...newAuthor, link: e.target.value })}
                            className="border rounded-lg w-full p-2 mb-4"
                        />
                        
                        <label className="block mb-2 font-medium">Author Picture URL</label>
                        <input
                            type="text"
                            placeholder="Author Picture URL"
                            value={newAuthor.picture}
                            required
                            onChange={(e) => setNewAuthor({ ...newAuthor, picture: e.target.value })}
                            className="border rounded-lg w-full p-2 mb-4"
                        />
                        <div className='flex justify-center items-center gap-2'>
                            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200" onClick={handleCreateAuthor}>
                                Submit
                            </button>
                            <button className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-200" onClick={handleReset}>
                                Reset
                            </button>
                            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </section>
       
            <div className='bg-gray-100 p-10'>
                <h1 className='text-4xl font-bold text-center text-gray-800 mb-5'>Author List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {authors.map(author => (
                        <div key={author._id} className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col">
                            {author.picture && (
                                <img src={author.picture} alt={author.name} className="mt-2 h-24 w-24 rounded-full object-cover mx-auto" />
                            )}
                            <h3 className="font-semibold text-lg">{author.name}</h3>
                            <a href={author.link} className="text-blue-500 hover:underline text-sm" target="_blank" rel="noopener noreferrer">Profile Link</a>
                            <p className="text-gray-600">{author.bio}</p>
                        </div>
                    ))}
                </div>
            </div>          
        </main>
    );
};

export default Author;
