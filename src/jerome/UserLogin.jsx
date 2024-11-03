import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import bgImagee2 from "../steph/AboutPageComponents/bgg.png";

const bgImage2 = {
    backgroundImage: `url(${bgImagee2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};


function UserLogin({handleStorageChange}) {
    //----- get all users in the database
    const [users, setUsers] = useState([]);

    //---- get the inputted username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    //----- Fetch users from the database
    function fetchUsers() {
        axios.get('http://localhost:8000/api/getUsers')
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const navigate = useNavigate();

    function handleLogin() {

        const user = users.find(user => user.username === username);

        //----------- invalid username
        if (!user) {
            setError('Invalid Credentials');
            return;
        }

        //----------- invalid password
        if (user.password !== password) {
            setError('Invalid Credentials');
            return;
        }

        //-------------- when user is successfully logged in
        localStorage.setItem("username", username)
        setUsername('')
        setPassword('')
        setError('');
        console.log('User logged in successfully');
        handleStorageChange()
        navigate(-1)


    };

    return (
        <>
           <main  style={bgImage2}  className="min-h-screen w-full flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <div className="mb-4">
                    <input
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <input
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                <button
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-200"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <div>
                        <p className='logreg'>Don&apos;t have an account? <Link to="/jerome/userregister" className='toLink'>Register Here</Link></p>
                    </div>

                    <div className='errorCont'>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    

                    </div>
            </div>
        </main>
        </>
    );
}

export default UserLogin;
