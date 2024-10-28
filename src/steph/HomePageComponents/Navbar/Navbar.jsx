import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <nav className='absolute top-0 left-0 w-full text-white bg-red-950'>
      <button onClick={handleBack} className='text-white'>
        BACK
      </button>
      <div className='container mx-auto p-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          {/* Logo section */}
          <h1 className='text-2xl font-semibold uppercase'>
            <span className='lightOrange'>Shelf 
              <span>Wise</span>
            </span>
          </h1>

          {/* Search Bar */}
          <div className='w-full sm:w-auto sm:flex-1 max-w-xl mx-auto'>
            <div className='relative flex items-center w-full h-10 rounded-xl focus-within:shadow-lg bg-white overflow-hidden'>
              <div className='grid place-items-center h-full w-11 text-gray-300'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                className='h-full w-full outline-none text-sm border-none text-gray-700'
                type='text'
                id='search'
                placeholder='Search Books, Categories and Authors.'
              />
              <button type="submit" className="text-white focus:outline-none font-medium rounded-xl text-sm px-4">Search</button>
            </div>
          </div>

          {/* Account Button */}
          <div className='text-white'>
            <button className='px-4 py-2 rounded-full bg-white text-red-950 hover:bg-gray-100 duration-200'>
              Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
