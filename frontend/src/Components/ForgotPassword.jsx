import React, { useState } from "react";
import { auth } from "../firebase"; // Import Firebase Auth
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import "./Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleResetPassword}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
};

export default ForgotPassword;
