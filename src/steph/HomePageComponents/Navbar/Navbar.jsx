import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BackIcon from './logo.svg';



const Navbar = ({userLoggedIn, handleStorageChange}) => {
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate(-1); 
  };
  return (
    <nav className='static top-0 left-0 w-full text-white bg-red-950'>
     
      <div className='container mx-auto p-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center sm:gap-2'>
          {/* Back Button */}
          <button className='bg-transparent border-0 hover:bg-transparent' onClick={handleBack}>
            <svg width="30px" height="30px" viewBox="10 10 2050 2050" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1582.2,1488.7a44.9,44.9,0,0,1-36.4-18.5l-75.7-103.9A431.7,431.7,0,0,0,1121.4,1189h-60.1v64c0,59.8-33.5,112.9-87.5,138.6a152.1,152.1,0,0,1-162.7-19.4l-331.5-269a153.5,153.5,0,0,1,0-238.4l331.5-269a152.1,152.1,0,0,1,162.7-19.4c54,25.7,87.5,78.8,87.5,138.6v98.3l161,19.6a460.9,460.9,0,0,1,404.9,457.4v153.4a45,45,0,0,1-45,45Z"/>
            </svg>
          </button>
          
          {/* Logo section */}

          <Link className='text-white' to={"/home"}>
            <div className='flex items-center'>
              <img src={BackIcon} alt="Back" className='h-[40px] w-auto' />
              <h1 className='text-2xl font-semibold uppercase'> ShelfWise</h1>
            </div>
          </Link>

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
          {userLoggedIn ? 
              (<div className='text-white'>
                  <button className='px-4 py-2 rounded-full bg-white text-red-950 hover:bg-gray-100 duration-200'
                  onClick={() => {
                    localStorage.removeItem("username")
                    handleStorageChange()
                    }}>
                    Log Out
                  </button>
              </div>)
            :
            (<div className='text-white'>
              <Link to={"/jerome/userlogin"}>
                <button className='px-4 py-2 rounded-full bg-white text-red-950 hover:bg-gray-100 duration-200'>
                  Log In
                </button>
              </Link>
            </div>)
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
