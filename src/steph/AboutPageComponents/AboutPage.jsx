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
      <main className=" text-gray-200">
        {/* Hero Section */}
        <section style={bgImage} className="w-full relative py-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="flex justify-center lg:w-1/2">
              <div className="border-2 w-full max-w-lg">
                <img
                  src={bgImagee}
                  alt="Featured Book"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
              <h2 className="text-3xl font-bold mb-5">Welcome to ShelfWise!</h2>
              <p className="text-lg opacity-70 mb-5">
                At ShelfWise, we are passionate about connecting readers with a diverse range of literature. Our online library system is designed to simplify the way you discover, manage, and enjoy books.
              </p>
              <button className='bg-red-950 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3 text-white'>
                What's Our Story
                <svg id="next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 12H7M17 12L13 8M17 12L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-10 bg-white text-gray-900">
          <div className='container'>
            <h1 className='text-3xl font-bold '>Who We Are</h1>
            <p className="mb-5 leading-relaxed text-lg p-5">
            At ShelfWise, we are a passionate team of book lovers and technology enthusiasts dedicated to transforming the reading experience for everyone. Our mission is to provide a user-friendly platform that caters to all your reading needs, making literature accessible and enjoyable for all.
            We believe in the power of stories to inspire, educate, and connect people. That’s why we’ve created a vibrant online community where readers can easily explore a vast array of books, engage with authors, and discover new genres. Our platform is designed not just to showcase literature, but to empower both readers and authors by fostering meaningful interactions and encouraging a love for reading.
            Whether you're a lifelong bibliophile or just starting your literary journey, ShelfWise is here to support you.</p>
            <h2 className="text-2xl font-semibold mb-3 text-center">What We Offer</h2>
            <div className='flex justify-center'>
            <div className="max-w-5xl flex justify-center items-center content-center text-lg">
              <p className="py-2 hover:bg-gray-100 transition duration-200 rounded-md p-2">📚 Extensive Collection: Explore our vast library featuring a wide range of books across various genres.</p>
              <p className="py-2 hover:bg-gray-100 transition duration-200 rounded-md p-2">✍️ Author Profiles: Discover your favorite authors with biographies and bibliographies.</p>
              <p className="py-2 hover:bg-gray-100 transition duration-200 rounded-md p-2">📂 Organized Categories: Navigate our library effortlessly with well-defined categories.</p>
              <p className="py-2 hover:bg-gray-100 transition duration-200 rounded-md p-2">🛠️ Simple CRUD Functionality: Easily manage authors, books, and categories.</p>
            </div>
            </div>       
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-10 text-black text-center ">
          <div className='container mx-auto'>
            <h1 className='text-3xl font-bold mb-5'>Our Vision</h1>
            <p className="mb-5 leading-relaxed">
              We aim to foster a vibrant literary community where readers can explore and share their passion for books. By providing tools for authors and maintaining an organized collection, we strive to enhance the reading experience for everyone.
            </p>
            <h2 className="text-2xl font-semibold mb-3 ">Join Us!</h2>
            <p className="mb-5 leading-relaxed">
              Whether you're an avid reader, a budding author, or simply curious about literature, ShelfWise invites you to explore our platform. Discover your next favorite book and be part of our growing community!
            </p>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-10 text-black text-center">
          <div className='container mx-auto'>
            <h1 className='text-3xl font-bold mb-5'>Additional Features</h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
