import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Contacts = () => {

    const[contacts,setContacts] = useState([]);
    const [newContact, setNewContact] = useState({});

    useEffect(()=>{
        fetchContacts()
    },[]);

    
    const fetchContacts = () => {
        axios.get("http://localhost:8000/api/getContacts")
        .then((response) => {
          console.log(response.data)
          setContacts(response.data)
        })
        .catch((error)=>{
          console.log(error);
        });
    }

    const handleCreateContacts = () => {
        axios.post("http://localhost:8000/api/createContacts", newContact)
         .then(() =>{
            fetchContacts();
            setNewContact({ name: '', phone: '', email: '', message: ''})
         })
         .catch((error) => {
          console.log(error.response ? error.response.data : error.message);
        });
    };


  return (
    <div>
      
        <div>
            <h1>Contact Us</h1>
            <label>Name</label>
            <input type='text' 
            placeholder='Enter Name '
            value={newContact.name}
            onChange={(e)=> setNewContact({...newContact, name: e.target.value})}
            />
              <label>Phone Number</label>
            <input type='number' 
            placeholder='Enter Number '
            value={newContact.phone}
            onChange={(e)=> setNewContact({...newContact, phone: e.target.value})}
            />
              <label>Email</label>
            <input type='text' 
            placeholder='Enter Email '
            value={newContact.email}
            onChange={(e)=> setNewContact({...newContact, email: e.target.value})}
            />
            <label>Message</label>
             <textarea type='text' 
            placeholder='Input Message '
            value={newContact.message}
            onChange={(e)=> setNewContact({...newContact, message: e.target.value})}
            />
          <button onClick={handleCreateContacts}>Submit</button> 

        <h1 className='Contacts'>Contact LIST</h1>
          <ul>
              {contacts.map(contact => (
                  <li key={contact._id}>{contact.name} {contact.phone} {contact.email} {contact.message}</li> 
              ))}
          </ul>
        </div>  

    </div>

  )
}

export default Contacts
