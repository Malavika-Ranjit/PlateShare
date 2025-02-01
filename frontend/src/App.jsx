




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword"; // Import ForgotPassword
import DashboardPage from "./Components/DashboardPage";
import FoodListingsPage from "./Components/FoodListingsPage";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar remains visible on all pages */}
      <Navbar />

      <h1>Food Donation Platform</h1>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Added this line */}

        {/* Dashboard & Food Listings Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/food-listings" element={<FoodListingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
