import React from "react";
import Logo from "../images/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 blackcolor px-[5%]">
      <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            width={151}
            height={61}
            alt="image"
            className="rounded-lg"
          />
        </div>

        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm footercss">
        <Link className="footercssa" aria-current="page" to="/">Overview</Link>
        <Link className="footercssa" aria-current="page" to="/about">About Us</Link>
        <Link className="footercssa" aria-current="page" to="/about">Contact</Link>
        <Link className="footercssa" aria-current="page" to="/about">Features</Link>
        <Link className="footercssa" aria-current="page" to="/about">Privacy Policy</Link>
        <Link className="footercssa" aria-current="page" to="/about">Terms of Use</Link>
        </nav>

      </div>



      <div className="flex flex-col md:flex-row border-t border-gray-700 justify-between items-center px-4">
        <p className="text-center py-4 text-sm">
          MutaEngine © 2024. All rights reserved.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#youtube" className="hover:text-white">
            <FaYoutube size={20} />
          </a>
          <a href="#facebook" className="hover:text-white">
            <FaFacebookF size={20} />
          </a>
          <a href="#twitter" className="hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#instagram" className="hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="#linkedin" className="hover:text-white">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;