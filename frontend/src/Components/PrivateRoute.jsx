/*import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check for token
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute; */

import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // Ensure this is correct

const PrivateRoute = ({ children }) => {
  return auth.currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

