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
            <div className='bodyCont'>
            
                <div className='mainContReg'>

                
                    <h2>Registration</h2>
                    <div>
                        <input 
                            className='inputss'
                            type='text'
                            placeholder='First Name'
                            value={newUser.firstName}
                            onChange={(e) => setNewUser({...newUser, firstName:e.target.value})}
                            required
                        />
                    </div>
                    
                    <div>
                        <input
                            className='inputss' 
                            type='text'
                            placeholder='Last Name'
                            value={newUser.lastName}
                            onChange={(e) => setNewUser({...newUser, lastName:e.target.value})}
                            required
                        />
                    </div>
                    
                    <div>
                        <input 
                            className='inputss'
                            type='text'
                            placeholder='Username'
                            value={newUser.username}
                            onChange={(e) => setNewUser({...newUser, username:e.target.value})}
                            required
                        />
                    </div>
                    
                    <div>
                        <input 
                            className='inputss'
                            type='email'
                            placeholder='Email'
                            value={newUser.email}
                            onChange={(e) => setNewUser({...newUser, email:e.target.value})}
                            required
                        />
                    </div>
                    
                    <div>
                        <input 
                            className='inputss'
                            type='password'
                            placeholder='Password'
                            value={newUser.password}
                            onChange={(e) => setNewUser({...newUser, password:e.target.value})}
                            required
                        />
                    </div>
                    
                    <div>
                        <input
                            className='inputss' 
                            type='password'
                            placeholder='Re-type Password'
                            value={repass}
                            onChange={(e) => setRepass(e.target.value)}
                            required
                        />
                    </div>

                    <p className='logreg'>Already have an account? <Link to={"/jerome/userlogin"} className='toLink'>Login Here</Link></p>
                    <div className='errorCont'>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    
                    <div className='btnCont'>
                        <button onClick={handleCreateUser}>Create</button>
                    </div>
                    
                    
                    

                </div>
            </div>
        </>
    )
}

export default UserRegister;
