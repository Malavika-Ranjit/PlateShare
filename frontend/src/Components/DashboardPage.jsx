

/*import React from 'react';
import './DashboardPage.css'; // Your custom styles for DashboardPage
import { Link } from 'react-router-dom';
import DonorDashboard from '../components/DonorDashboard';
import RecipientDashboard from '../components/RecipientDashboard';

const DashboardPage = () => {
  const isDonor = true; // This can be dynamic based on actual user authentication or role

  return (
    <div className="centered-content">
      <h2>Dashboard</h2>
      {isDonor ? <DonorDashboard /> : <RecipientDashboard />}

      <div className="link-container">
        <Link to="/food-listings">Go to Food Listings</Link>
      </div>
    </div>
  );
};

export default DashboardPage; */

import React from 'react';
import './DashboardPage.css'; // Your custom styles for DashboardPage
import { Link } from 'react-router-dom';
import DonorDashboard from '../Components/DonorDashboard';
import RecipientDashboard from '../Components/RecipientDashboard';

const DashboardPage = () => {
  // Get the role from localStorage
  const userRole = localStorage.getItem("userRole");

  if (!userRole) {
    // If no role is found, redirect to login (or show a message)
    window.location.href = "/login"; // Redirect to login if no role is stored
    return null;
  }

  return (
    <div className="centered-content">
      <h2>Dashboard</h2>
      {/* Conditional rendering based on the user's role */}
      {userRole === "Donor" ? <DonorDashboard /> : <RecipientDashboard />}

      <div className="link-container">
        {/* <Link to="/food-listings">Go to Food Listings</Link> */}
      </div>
    </div>
  );
};

export default DashboardPage;

