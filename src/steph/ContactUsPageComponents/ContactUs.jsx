import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaComment } from 'react-icons/fa';


const ContactUs = ({userLoggedIn}) => {
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
      <main className="container">
        <section className="min-h-screen mt-[50px] ">
          <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-xl shadow-gray-300">
            <div className="flex flex-row container mx-auto gap-10 items-start p-6 bg-gray-100 ">
              <div className="flex-1 ">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-700 mb-4">
                  For questions, technical assistance, or collaboration
                  opportunities, please fill out the form below.
                </p>
              </div>

              <div className="flex flex-col space-y-4 flex-1 ">
                <div className="flex items-center ">
                  <FaEnvelope className="text-blue-600 mr-2 " />
                  <p className="font-semibold">Email: support@example.com</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-blue-600 mr-2" />
                  <p className="font-semibold">Telephone: (123) 456-7890</p>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-2" />
                  <p className="font-semibold">
                    Location: 123 Main St, City, Country
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Get in Touch
              </h3>

              {/* Form Section */}
              <form className="mb-6">
                <label className="flex items-center mb-1 font-semibold">
                  <span className="mr-2">
                    <FaUser />
                  </span>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={newContact.name}
                  onChange={(e) =>
                    setNewContact({ ...newContact, name: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="flex items-center mb-1 font-semibold">
                  <span className="mr-2">
                    <FaPhone />
                  </span>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Number"
                  value={newContact.phone}
                  onChange={(e) =>
                    setNewContact({ ...newContact, phone: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="flex items-center mb-1 font-semibold">
                  <span className="mr-2">
                    <FaEnvelope />
                  </span>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={newContact.email}
                  onChange={(e) =>
                    setNewContact({ ...newContact, email: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="flex items-center mb-1 font-semibold">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  Message
                </label>
                <textarea
                  placeholder="Input Message"
                  value={newContact.message}
                  onChange={(e) =>
                    setNewContact({ ...newContact, message: e.target.value })
                  }
                  className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />

                <button
                  type="button"
                  onClick={handleCreateContacts}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contacts List Section */}
        {userLoggedIn && 
        <section>
          <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">
            Contacts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50 p-6">
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <div
                  key={contact._id}
                  className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col transition-transform transform hover:scale-105"
                >
                  <div className="font-semibold text-lg text-gray-900">
                    Name: {contact.name}
                  </div>
                  <div className="text-gray-700">
                    Phone Number: {contact.phone}
                  </div>
                  <div className="text-gray-700">Email: {contact.email}</div>
                  <div className="text-gray-700">
                    Message: {contact.message}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No contacts available.
              </p>
            )}
          </div>
        </section>
        }
      </main>
    );
};

export default ContactUs;

