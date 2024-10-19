import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
            <Link to={"/login"}>GO TO LOGIN</Link>
            
            <div>

                <h2>CREATE USER</h2>

                <div>
                    <input 
                        type='text'
                        placeholder='First Name'
                        value={newUser.firstName}
                        onChange={(e) => setNewUser({...newUser, firstName:e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type='text'
                        placeholder='Last Name'
                        value={newUser.lastName}
                        onChange={(e) => setNewUser({...newUser, lastName:e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type='text'
                        placeholder='Username'
                        value={newUser.username}
                        onChange={(e) => setNewUser({...newUser, username:e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type='email'
                        placeholder='Email'
                        value={newUser.email}
                        onChange={(e) => setNewUser({...newUser, email:e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type='password'
                        placeholder='Password'
                        value={newUser.password}
                        onChange={(e) => setNewUser({...newUser, password:e.target.value})}
                        required
                    />
                </div>
                
                <div>
                    <input 
                        type='password'
                        placeholder='Re-type Password'
                        value={repass}
                        onChange={(e) => setRepass(e.target.value)}
                        required
                    />
                </div>
                
                <div>
                    <button onClick={handleCreateUser}>Create</button>
                </div>
                
                <div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                

            </div>
        </>
    )
}

export default UserRegister;
