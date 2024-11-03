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

const UpdateAuthor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const [editAuthor, setEditAuthor] = useState(location.state?.author || null);

    useEffect(() => {
        const fetchAuthorDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/getAuthors/${id}`);
                setEditAuthor(response.data);
            } catch (error) {
                console.error("Error fetching author details", error);
                alert("Failed to get author details :(");
            }
        };

        if (id) fetchAuthorDetails();
    }, [id]);

    const handleEditAuthor = async () => {
        try {
            await axios.put(`http://localhost:8000/api/updateAuthors/${id}`, editAuthor);
            alert("Update Successful!");
            navigate(`/author/overview/${id}`);
        } catch (error) {
            console.error(error);
            alert("Update Unsuccessful!");
        }
    };

    const cancelBtnFunc = () => {
        navigate(`/author/overview/${id}`);
    };

    return (
        <main style={bgImage2} className="min-h-screen flex items-center justify-center">
            <section className='container p-5 max-w-[800px] w-full bg-white rounded-lg shadow-lg'>
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 mt-10">Update Author</h1>
                {editAuthor && (
                    <div className="p-6">
                        <label className="block mb-2 font-medium">Author Name</label>
                        <input
                            type="text"
                            placeholder="Author Name*"
                            value={editAuthor.name}
                            required
                            onChange={(e) => setEditAuthor({ ...editAuthor, name: e.target.value })}
                            className="border rounded-lg w-full p-2 mb-4"
                        />
                        
                        <label className="block mb-2 font-medium">Author Bio</label>
                        <textarea
                            placeholder='Author Bio'
                            value={editAuthor.bio}
                            onChange={(e) => setEditAuthor({ ...editAuthor, bio: e.target.value })}
                            className="border rounded-lg w-full p-2 mb-4"
                        />
                        
                        <label className="block mb-2 font-medium">Author Link</label>
                        <input
                            type="text"
                            placeholder="Author Link"
                            value={editAuthor.link}
                            onChange={(e) => setEditAuthor({ ...editAuthor, link: e.target.value })}
                            className="border rounded-lg w-full p-2 mb-4"
                        />
                        
                        <label className="block mb-2 font-medium">Author Picture</label>
                        <input
                            type="text"
                            placeholder="Author Picture URL"
                            value={editAuthor.picture}
                            onChange={(e) => setEditAuthor({ ...editAuthor, picture: e.target.value })}
                            className="border rounded-lg w-full p-2 mb-4"
                        />
                        
                        <div className="flex justify-between mt-4">
                            <button 
                                onClick={handleEditAuthor} 
                                className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition'>
                                Update
                            </button>
                            <button 
                                onClick={cancelBtnFunc} 
                                className='bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition'>
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default UpdateAuthor;
