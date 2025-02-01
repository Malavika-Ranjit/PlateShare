// src/pages/DashboardPage.jsx
/*import React from 'react';
import './DashboardPage.css';

import { Link } from 'react-router-dom';
import DonorDashboard from '../components/DonorDashboard';
import RecipientDashboard from '../components/RecipientDashboard';

const DashboardPage = () => {
  const isDonor = true;  // This can be dynamic based on actual user authentication or role

  return (
    <div>
      <h2>Dashboard</h2>
      {isDonor ? <DonorDashboard /> : <RecipientDashboard />}
      
      <div>
        <Link to="/food-listings">Go to Food Listings</Link>
      </div>
    </div>
  );
};

export default DashboardPage;*/



import React from 'react';
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

export default DashboardPage;
