/*import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-green-700 to-green-500 p-4 shadow-lg flex justify-between items-center z-50">
      <a href="#home" className="text-white text-2xl font-bold">PLATESHARE</a>
      <div className="flex gap-4">
        <Link to="home" smooth={true} duration={500} className="text-white cursor-pointer px-3 py-2 hover:bg-orange-400 hover:text-black rounded-md transition">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="text-white cursor-pointer px-3 py-2 hover:bg-orange-400 hover:text-black rounded-md transition">
          About
        </Link>
        <Link to="signup" smooth={true} duration={500} className="text-white cursor-pointer px-3 py-2 hover:bg-orange-400 hover:text-black rounded-md transition">
          Sign Up
        </Link>
        <Link to="login" smooth={true} duration={500} className="text-white cursor-pointer px-3 py-2 hover:bg-orange-400 hover:text-black rounded-md transition">
          Log Out
        </Link>
        <Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer px-3 py-2 hover:bg-orange-400 hover:text-black rounded-md transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}; */


/*import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">PLATESHARE</a>
      <div className="nav-links">
        <Link to="home" smooth={true} duration={500} className="nav-item">Home</Link>
        <Link to="about" smooth={true} duration={500} className="nav-item">About</Link>
        <Link to="signup" smooth={true} duration={500} className="nav-item">Sign Up</Link>
        <Link to="login" smooth={true} duration={500} className="nav-item">Log Out</Link>
        <Link to="contact" smooth={true} duration={500} className="nav-item">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;


;
*/
import React from "react";
import './Navbar.css'; // import navbar-specific styles here

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#signup">Sign Up</a>
        <a href="#login">Login</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
