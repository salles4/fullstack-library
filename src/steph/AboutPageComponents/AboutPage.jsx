import React from 'react';
import Navbar from '../HomePageComponents/Navbar/Navbar';
import bgImagee from "../HomePageComponents/HomePage/bgImage.png";

const bgImage = {
  backgroundImage: `url(${bgImagee})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section style={bgImage} className="w-full relative py-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            {/* Left Column (Image Section) */}
            <div className="flex justify-center lg:w-1/2">
              <div className="border-2 min-w-[300px] min-h-[400px]">
                <img
                  src={bgImagee}
                  alt="Featured Book"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Column (Info Section) */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
              <h2 className="text-3xl font-bold mb-5 text-white">About This Page</h2>
              <p className="text-lg text-white opacity-70 mb-5">
                This section is reserved for more information about the book, the authors, or any other details you would like to present. You can customize the content here.
              </p>

              <button className='bg-red-950 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3 text-white' > What's Our Story
                  <svg id="next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 12H7M17 12L13 8M17 12L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className='m-10'>
            <div className='container'>
              <h1 className='mb-5'>
                About Us
              </h1>
              <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam 
                expedita ut dignissimos quibusdam incidunt aspernatur, 
                tempora magni veritatis id sunt blanditiis perspiciatis aut! Rerum 
                illo iure atque at minus!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam nisi doloribus adipisci. Quibusdam voluptatibus tempore 
                rem magnam, maiores labore nemo facilis esse voluptatum laborum molestiae, 
                libero ad accusamus, laudantium quod!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam 
                expedita ut dignissimos quibusdam incidunt aspernatur, 
                tempora magni veritatis id sunt blanditiis perspiciatis aut! Rerum 
                illo iure atque at minus!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam nisi doloribus adipisci. Quibusdam voluptatibus tempore 
                rem magnam, maiores labore nemo facilis esse voluptatum laborum molestiae, 
                libero ad accusamus, laudantium quod!
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div>
              <h1 className='text-center'>
               Additional Features
              </h1>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
