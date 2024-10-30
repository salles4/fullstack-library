import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-white bg-red-950 py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link to="/" className="mx-2 hover:underline">Logo</Link>
          <Link to="/about" className="mx-2 hover:underline">About Us</Link>
          <Link to="/contacts/us" className="mx-2 hover:underline">Contact</Link>
        </div>
        <div className="mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="/path/to/facebook-icon.png" alt="Facebook" className="inline h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="/path/to/twitter-icon.png" alt="Twitter" className="inline h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="/path/to/instagram-icon.png" alt="Instagram" className="inline h-6 w-6" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="/path/to/Website-icon.png" alt="Website" className="inline h-6 w-6" />
          </a>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} ShelfWise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
