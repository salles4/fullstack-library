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
      
                <div className="mb-6 p-6 bg-slate-300 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">Get in Touch</h2>
                
                <label className="block mb-1 font-semibold">Name</label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block mb-1 font-semibold">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Enter Number"
                    value={newContact.phone}
                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block mb-1 font-semibold">Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={newContact.email}
                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block mb-1 font-semibold">Message</label>
                <textarea
                    placeholder="Input Message"
                    value={newContact.message}
                    onChange={(e) => setNewContact({ ...newContact, message: e.target.value })}
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                />

                <button
                    onClick={handleCreateContacts}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </div>


    </div>

  )
}

export default Contacts
