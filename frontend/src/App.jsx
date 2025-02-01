

/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; 
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
//import Dashboard from "./Components/Dashboard"; 
import PrivateRoute from "./Components/PrivateRoute"; 
import "./App.css"; 

function App() {
  return (
    <Router>
      {}
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

export default App;*/


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import DashboardPage from "./Components/DashboardPage";
import FoodListingsPage from "./Components/FoodListingsPage";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar is OUTSIDE Routes so it stays visible */}
      <Navbar />

      {/* <div className="app-container"> */}
        <h1>Food Donation Platform</h1>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard & Food Listings Pages */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/food-listings" element={<FoodListingsPage />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;

