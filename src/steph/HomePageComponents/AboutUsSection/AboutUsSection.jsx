import React from 'react';
import { Link } from 'react-router-dom'
import { aboutus } from '../../data';
import bgImagee from "../AboutUsSection/aboutUs2.png";

const AboutUsSection = () => {
  return(
    <div className='bg-gray-100 min-h-[420px] w-full rounded-b-[150px] ' >
      <div >
        <div className=' container grid grid-cols-1 md:grid-cols-2 gap-10 p-10' >
          {/* Info (Left Column) */}
          <div >
            <h1 className='text-3xl font-bold m-3 pt-10'> About <span className=' text-amber-950' > Us </span> </h1>
            <div className='mb-5 opacity-60 p-3'> {aboutus[0].aboutUs} 
            </div>

            <Link to={"/about"}>
              <button className='bg-gradient-to-r from-red-950 to-red-700 transition-all duration-200 text-white px-4 py-2 rounded-full m-3 flex items-center gap-1 group hover:scale-105'>
                <span className='block transition-all duration-200'>Show More</span>
                <svg className='hidden group-hover:block transition-all duration-200 ml-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 12H7M17 12L13 8M17 12L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
        
         {/* Image Section (Right Column) */}
         <div className='p-5 mt-5'>
            <div className="flex justify-center ">
                <div className="border-2 w-full max-w-lg rounded-lg overflow-hidden">
                  <img
                    src={bgImagee}
                    alt="Featured Book"
                    className="w-full h-auto object-cover shadow-lg"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default AboutUsSection
