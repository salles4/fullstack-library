import React from 'react';
import { Link } from 'react-router-dom'


const AboutUsSection = () => {
  return(
    <div className='bg-gray-100 min-h-[420px] w-full rounded-b-[150px] ' >
      <div >
        <div className=' container grid grid-cols-1 md:grid-cols-2 gap-10 p-10' >
          {/* Info (Left Column) */}
          <div >
            <h1 className='text-3xl font-bold m-3 pt-10'> About <span className=' text-amber-950' > Us </span> </h1>
            <div className='mb-5 opacity-60 p-3'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Ducimus ipsa dolores, quam reprehenderit id repellat laboriosam, 
              dolor aliquam amet saepe alias quod eveniet corrupti! 
              Quam iure dolores aperiam iusto doloribus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsa enim necessitatibus error laboriosam quas facere, 
              nemo consectetur ullam quia eveniet, dicta esse tempore, 
              totam quos veniam quo a laborum incidunt.
            </div>

            <Link to={"/about"}>  
              <button className='bg-red-950 px-4 py-2 rounded-full m-3 hover:scale-105 duration-200 flex items-center gap-3 text-white' > 
                Show More
                    <svg id="next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 12H7M17 12L13 8M17 12L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
              </button>
            </Link>
          </div>
        
         {/* Image Section (Right Column) */}
         <div className='p-5 mt-5'>
            <div className="flex justify-center border-2 min-w-[300px] min-h-[400px] ">
              <img src="/path/to/your/image.jpg" alt="About Us"
                className="w-full h-auto object-cover rounded-lg shadow-lg "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default AboutUsSection
