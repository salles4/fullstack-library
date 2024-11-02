import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '../Navbar/logo.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full text-white bg-red-950 '>
      <div className='container mx-auto p-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center sm:gap-2'>
        {/* Logo and Navigation Links */}
        <div className="flex flex-col items-start mb-4 md:mb-0 ">
          <Link to="/home" className="flex  items-center mx-2 hover:underline text-white">
            <img src={BackIcon} alt="Logo" className="h-[40px] w-auto" />
            <h1 className="text-2xl font-semibold uppercase ">ShelfWise</h1>
          </Link>
          <Link to="/about" className="mx-2 hover:underline text-white">About Us</Link>
          <Link to="/contacts/us" className="mx-2 hover:underline text-white">Contact</Link>
        </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center mb-4">
            <h2 className="font-semibold text-xl mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="h-6 w-6 text-white hover:text-blue-300 transition duration-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6 text-white hover:text-blue-300 transition duration-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6 text-white hover:text-blue-300 transition duration-200" />
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="h-6 w-6 text-white hover:text-blue-300 transition duration-200" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start space-y-2">
            <h2 className="font-semibold text-xl">Contact Us</h2>
            <div className="flex items-center">
              <FaEnvelope className="text-white mr-2" />
              <p className="font-semibold">support@example.com</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-white mr-2" />
              <p className="font-semibold">(123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-white mr-2" />
              <p className="font-semibold">123 Main St, City</p>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm mt-4 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} ShelfWise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
