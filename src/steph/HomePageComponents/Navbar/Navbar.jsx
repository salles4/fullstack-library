import React from 'react'

const Navbar = () => {
  return <nav className='absolute top-0 left-0 w-full p-6
  text-white z-20 bg-red-950' >
    <div className='container '>
      <div className='flex justify-between items-center'>
        {/* logo section */}
        <h1 className='text-2xl font-semibold uppercase'>
          <span className='lightOrange'>Shelf 
            <span>Wise</span>
          </span>
        </h1>

        {/* Search Bar */}
        <div>
          Search
        </div>

        {/* Account Button */}
        <div>
          Account
        </div>
      </div>
    </div>
  </nav>
};

export default Navbar
