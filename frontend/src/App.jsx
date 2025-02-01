/*import Navbar from "./Components/Navbar";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Navbar />

      <Element name="home" className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">FOOD IS A GIFT, BALANCE IS THE KEY SHARING IT</h1>
      </Element>

      <Element name="about" className="min-h-screen flex flex-col items-center justify-center bg-white p-10">
        <h2 className="text-3xl font-bold">Welcome to PlateShare</h2>
        <p className="mt-4 max-w-2xl text-center">
          At PlateShare, we connect food donors (restaurants, grocery stores, individuals) with those in need. Our platform reduces food waste while helping communities.
        </p>
      </Element>

      <Element name="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-10">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">Phone: 1234567890</p>
      </Element>
    </div>
  );
} */



/*import React from "react";
import Navbar from "./Components/Navbar";
import { Element } from "react-scroll";
import "./App.css"; // Import global styles

function App() {
  return (
    <div>
      <Navbar />

      <Element name="home" className="section home">
        <h1>FOOD IS A GIFT, BALANCE IS THE KEY SHARING IT</h1>
      </Element>

      <Element name="about" className="section about">
        <h2>Welcome to PlateShare</h2>
        <p>
          At PlateShare, we connect food donors (restaurants, grocery stores, individuals) with those in need. Our platform reduces food waste while helping communities.
        </p>
      </Element>

      <Element name="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>Phone: 1234567890</p>
      </Element>
    </div>
  );
}

export default App;*/

/*import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import './App.css'; // import global styles here

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;*/

/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; 
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css"; 

function App() {
  return (
    <Router>
      {/* Navbar is OUTSIDE Routes so it stays visible */}
      <Navbar />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;



