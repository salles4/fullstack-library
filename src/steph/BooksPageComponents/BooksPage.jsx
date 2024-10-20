import React from 'react'
import Navbar from '../HomePageComponents/Navbar/Navbar'
import ShowAllBooks from './ShowAllBooks'


const BooksPage = () => {
  return (
    <>
     <nav><Navbar/></nav>
     <main>
        <section >
            <div className='bg-gray-100 min-h-[500px] w-full rounded-b-[100px] relative' >
            <div>
                <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 p-10' >

                    {/* Image Section (Left Column) */}
                    <div>
                        <div className="flex justify-center border-2 min-w-[300px] min-h-[400px] ">
                            <img src="/path/to/your/image.jpg" alt="Featured Book"
                            className="w-full h-auto object-cover rounded-lg shadow-lg "/>
                        </div>
                    </div>
                    {/* Info (Right Column) */}
                    <div >
                        <h1 className='text-3xl font-bold mt-5'> Title </h1>
                        <div className='opacity-60 mt-2 m-1 mb-5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Ducimus ipsa dolores, quam reprehenderit id repellat laboriosam, 
                            dolor aliquam amet saepe alias quod eveniet corrupti! 
                            Quam iure dolores aperiam iusto doloribus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ipsa enim necessitatibus error laboriosam quas facere, 
                            nemo consectetur ullam quia eveniet, dicta esse tempore, 
                            totam quos veniam quo a laborum incidunt.
                        </div>
                        <button className='bg-red-950 px-4 py-2 rounded-full
                            hover:scale-105 duration-200 flex items-center gap-3 text-white' > Show Details
                            <svg id="next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 12H7M17 12L13 8M17 12L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section>
            <ShowAllBooks/>
        </section>
    </main>

    </>
   
  
  )
}

export default BooksPage
