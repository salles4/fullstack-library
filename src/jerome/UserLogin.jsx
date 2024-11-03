import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
        navigate("/home")


    };

    return (
        <>
            <div className='bodyCont'>
                <div className='mainCont'>
                    
                    <h2>Login</h2>

                    <div className='inputCont'>
                        <input
                            className='inputss'
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    
                    <div className='inputCont'>
                        <input
                            className='inputss'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <p className='logreg'>Don't have an account? <Link to="/jerome/userregister" className='toLink'>Register Here</Link></p>
                    </div>

                    <div className='errorCont'>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    
                    <div className='btnCont'>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    
                    
                    
                    
                </div>
                

            </div>
        </>
    );
}

export default UserLogin;
