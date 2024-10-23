import React from 'react'
import SuggestedWorks from '../AuthorOverviewComponents/SuggestedWorks';
import Navbar from '../HomePageComponents/Navbar/Navbar'

const BookDetails = () => {
  return (
    <>
    <nav><Navbar/></nav>
      <main>
        <section>
          <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 p-10'>
            <div className='text-start m-5'>
              <h1>Author Name:</h1>
                <p>Link</p>
                <p> Bio</p>
                
                <div className='text-end mt-10'>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
            </div>

              <div>
                <div className="flex justify-center border-2 min-w-[300px] min-h-[400px] ">
                  <img src="/path/to/your/image.jpg" alt="Author Details"
                    className="w-full h-auto object-cover rounded-lg shadow-lg "/>
                </div>
            </div>
          </div>
        </section>

        <section>
          <SuggestedWorks/>
        </section>
      </main>
    </>
  )
}
export default BookDetails
