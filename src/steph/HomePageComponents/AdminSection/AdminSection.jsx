import React from 'react';
import { Link } from 'react-router-dom';

const AdminSection = () => {
  return (
    <div className='container mx-auto p-10'>
      <h2 className='text-3xl font-bold text-center mb-6'>Admin Dashboard</h2>
      <p className='text-center mb-8 text-gray-600 text-lg'>
        Manage your books and authors efficiently. Choose an option below to get started.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <Link to="/josh/addBook">
          <div className='flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200'>
            <h3 className='text-2xl font-semibold mb-2 text-gray-800'>Add Book</h3>
            <p className='text-gray-500 text-center mb-4'>Add new books to the collection.</p>
            <button className='mt-4 bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 hover:bg-green-600'>
              Go to Add Book
            </button>
          </div>
        </Link>

        <Link to="/josh/AddAuthor">
          <div className='flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200'>
            <h3 className='text-2xl font-semibold mb-2 text-gray-800'>Add Author</h3>
            <p className='text-gray-500 text-center mb-4'>Add new authors to the database.</p>
            <button className='mt-4 bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-600'>
              Go to Add Author
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSection;
