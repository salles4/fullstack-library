import SuggestedWorks from '../AuthorOverviewComponents/SuggestedWorks';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../HomePageComponents/Footer/Footer';


const BookDetails = () => {
  const { id } = useParams(); 
  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/getAuthors/" + id)
      .then((response) => {
        console.log(response.data);
        setAuthor(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <main>
        <section>
          <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 p-10'>
            <div className='text-start m-5 '>
              <h1>Author Name: {author.name}</h1>
                <p>Link {author.link}</p>
                <p> Bio {author.bio}</p>
                
                <div className='text-end mt-10'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Edit</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-2'>Delete</button>
                </div>
            </div>

              <div>
                <div className="flex justify-center border-2 min-w-[300px] min-h-[400px] ">
                  <img src={author.picture} alt={author.name}
                    className="w-full h-auto object-cover rounded-lg shadow-lg "/>
                </div>
            </div>
          </div>
        </section>

        <section>
        <SuggestedWorks authorName={author.name} />
        </section>
      </main>
      <Footer/>
    </>
  )
}
export default BookDetails
