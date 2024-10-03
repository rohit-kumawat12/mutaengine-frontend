import React, { useState } from "react";
import Logo from "../images/logo.png";
import Button from "./CommonSection/Button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center headerHeight">
      <Link className="text-2xl font-bold" aria-current="page" to="/">
        <img
          src={Logo}
          width={100}
          height={40}
          alt="Futuristic lock icon representing the Polymorphic Code Engine"
          className="rounded-lg"
        />
      </Link>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      
      {/* Desktop Menu */}
      <nav className={`hidden md:flex space-x-6`}>
        <Link className="hover:text-cyan-400" aria-current="page" to="/">Overview</Link>
        <Link className="hover:text-cyan-400" aria-current="page" to="/about">About</Link>
        <Link className="hover:text-cyan-400" aria-current="page" to="/contact">Contact Us</Link>
        <a href="#" className="hover:text-cyan-400">
          <select style={{ background: "none", outline: "none !important" }}>
            <option value="solution1" style={{ background: "#00040F" }}>Solutions</option>
            <option value="solution2" style={{ background: "#00040F" }}>Solution 1</option>
            <option value="solution3" style={{ background: "#00040F" }}>Solution 2</option>
          </select>
        </a>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black text-white flex flex-col space-y-4 p-6 md:hidden zindexx9">
          <Link className="hover:text-cyan-400" aria-current="page" to="/" onClick={() => setIsOpen(false)}>Overview</Link>
          <Link className="hover:text-cyan-400" aria-current="page" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="hover:text-cyan-400" aria-current="page" to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <a href="#" className="hover:text-cyan-400">
            <select style={{ background: "none", outline: "none !important" }}>
              <option value="solution1" style={{ background: "#00040F" }}>Solutions</option>
              <option value="solution2" style={{ background: "#00040F" }}>Solution 1</option>
              <option value="solution3" style={{ background: "#00040F" }}>Solution 2</option>
            </select>
          </a>
          {/* Login and Sign Up for Mobile */}
          <div className="flex flex-col space-y-4">
            <Button title="Login" type={0} />
            <Button title="Sign up" type={1} />
          </div>
        </nav>
      )}

      <div className="space-x-4 hidden md:flex">
        <Button title="Login" type={0} />
        <Button title="Sign up" type={1} />
      </div>
    </header>
  );
};

export default Navbar;