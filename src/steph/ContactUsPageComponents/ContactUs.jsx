

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState({ name: '', phone: '', email: '', message: '' });

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = () => {
        axios.get("http://localhost:8000/api/getContacts")
            .then((response) => {
                console.log(response.data);
                setContacts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCreateContacts = () => {
        console.log('New contact data:', newContact); 
        axios.post("http://localhost:8000/api/createContacts", newContact)
            .then(() => {
                fetchContacts();
                setNewContact({ name: '', phone: '', email: '', message: '' });
            })
            .catch((error) => {
                console.log(error.response ? error.response.data : error.message);
            });
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-center mb-6 text-gray-700">
                For questions, technical assistance, or collaboration opportunities, please fill out the form below.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-center">Get in Touch</h3>

                {/* Form Section */}
                <div className="mb-6">
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
                        type="number"
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
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {/* Contacts List Section */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Contacts</h3>
                {contacts.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2">
                        {contacts.map((contact) => (
                            <li key={contact._id} className="bg-gray-200 p-2 rounded-md">
                                <strong>{contact.name}</strong> <br />
                                <span>{contact.phone}</span> <br />
                                <span>{contact.email}</span> <br />
                                <span>{contact.message}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No contacts available.</p>
                )}
            </div>
        </div>
    );
};

export default ContactUs;

