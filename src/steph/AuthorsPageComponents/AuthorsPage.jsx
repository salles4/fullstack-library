import React, { useState, useEffect } from 'react';
import Navbar from '../HomePageComponents/Navbar/Navbar'
import { Link } from 'react-router-dom';

// import ShowAllAuthors from './ShowAllAuthors'


const BooksPage = ({authors}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalAuthors = authors.length;
    
    
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalAuthors);
    };
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalAuthors - 1 : prevIndex - 1
      
      );
    };
  

    useEffect(() => {
      const interval = setInterval(goToNext, 4000);
  
      return () => clearInterval(interval);
    }, [totalAuthors]);

  return (
    <>
     <nav><Navbar/></nav>
     <main>
     <section >
             <div className='bg-gray-100 min-h-[500px] w-full rounded-b-[100px] shadow-lg' >
             <div>
                 <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 p-5' >
 
                     {/* Image Section (Left Column) */}
                     <div className='flex justify-center items-center border-2 min-w-[200px] min-h-[400px]'>
                        {authors.map((author, index) => (
                        <div
                            key={author._id}
                            className={`carousel-item flex justify-center ${index === currentIndex ? 'active' : ''}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        >
                            <img 
                            className="w-60 h-auto object-contain rounded-lg shadow-lg"
                            src={author.picture} 
                            alt="authors cover" />
                        </div>
                        ))}
                        </div>
                     {/* Info (Right Column) */}
                     <div>
                        {authors.map((author, index) => (
                        <div
                            key={author._id}
                            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}>
                            <h1 className='text-4xl font-bold mt-5 sm:text-center md:text-start '>{author.name}</h1>
                            <div className='text-lg text-ellipsis overflow-hidden sm:text-center md:text-start '>
                            <p className='opacity-60 mt-2 m-1 mb-5'>{author.bio}</p>                       
                          </div>
                            <button className='bg-red-950 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3 text-white' > 
                                <Link to={`/author/overview/${author._id}`} className='flex items-center gap-3 text-white'>
                                Show Details
                                <svg id="next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17 12H7M17 12L13 8M17 12L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              </Link>
                            </button>     
                        </div>
                        ))}      
                    </div>      
                 </div>
             </div>
             </div>
         </section>
    </main>

    </>
   
  
  )
}

export default BooksPage
