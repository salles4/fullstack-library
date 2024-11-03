import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import bgImagee2 from "../steph/AboutPageComponents/bgg.png";

const bgImage2 = {
    backgroundImage: `url(${bgImagee2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};


function UserRegister(){

    //------------- create and store into object all the user's data
    const [newUser, setNewUser] = useState({})
    const [repass, setRepass] = useState('')

    //------------- for error
    const [error, setError] = useState('');
   
    //----------- to create user and add to database and to empty input fields
    const handleCreateUser = () => {

        //---------- if empty fields
        if ( !newUser.firstName || !newUser.lastName  || !newUser.username  || !newUser.email  || !newUser.password ) {
            setError('Please fill all required fields');
            return;
            
        }

        //---------- the passwords are not same
        if ( newUser.password !== repass ) {
            setError('Passwords do not match.');
            return;
        }

        setError('');

        axios.post(`http://localhost:8000/api/createuser`, newUser)
        .then(() => {
            setNewUser({ firstName: "", lastName: "", username: "", email: "", password: "" })
            setRepass('')
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <>
           <main  style={bgImage2}  className="min-h-screen w-full flex items-center justify-center bg-gray-100">
           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>

                <div className="mb-4">
                    <input
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        placeholder="First Name"
                        value={newUser.firstName}
                        onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        placeholder="Last Name"
                        value={newUser.lastName}
                        onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="text"
                        placeholder="Username"
                        value={newUser.username}
                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="password"
                        placeholder="Password"
                        value={newUser.password}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-6">
                    <input
                        className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        type="password"
                        placeholder="Re-type Password"
                        value={repass}
                        onChange={(e) => setRepass(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <div className="flex justify-center mb-4">
                    <p className="text-gray-600">
                        Already have an account? 
                        <Link to="/jerome/userlogin" className="text-blue-600 hover:underline ml-1">Login Here</Link>
                    </p>
                </div>

                <div>
                    <button
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-200"
                        onClick={handleCreateUser}
                    >
                        Create
                    </button>
                </div>
            </div>
        </main>
        </>
    )
}

export default UserRegister;
