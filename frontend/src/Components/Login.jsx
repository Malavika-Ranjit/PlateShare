

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase Auth
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // New state for role selection
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!role) {
      alert("Please select a role (Donor or Recipient).");
      return;
    }

    try {
      // Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      alert(`Login successful as ${role}!`);

      // Store the selected role in localStorage
      localStorage.setItem("userRole", role);
      
      navigate("/dashboard"); // Redirect to Dashboard after login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        
        {/* Role Selection Dropdown */}
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="Donor">Donor</option>
          <option value="Recipient">Recipient</option>
        </select>

        <button type="submit">Login</button>
      </form>

      <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
