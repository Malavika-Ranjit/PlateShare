// src/components/DonorDashboard.jsx

/*import React from 'react';
import './DonorDashboard.css';

const DonorDashboard = () => {
  const listings = [
    { name: 'Apple', quantity: 10, expiry: '2025-02-10' },
    { name: 'Banana', quantity: 5, expiry: '2025-02-12' }
  ];

  return (
    <div>
      <h3>Your Food Listings</h3>
      <ul>
        {listings.map((listing, index) => (
          <li key={index}>
            {listing.name} - {listing.quantity} items, Expiry: {listing.expiry}
          </li>
        ))}
      </ul>
      <button>Add New Listing</button>
    </div>
  );
};

export default DonorDashboard;*/

// src/components/DonorDashboard.jsx
import React from 'react';
import './DonorDashboard.css'; 

const DonorDashboard = () => {
  const listings = [
    { name: 'Apple', quantity: 10, expiry: '10-02-2025' },
    { name: 'Banana', quantity: 5, expiry: '12-02-2025' }
  ];
  return (
    <div className="donor-dashboard">
      <h3>Your Food Listings</h3>
      <ul>
        {listings.map((listing, index) => (
          <li key={index}>
            {listing.name} - {listing.quantity} items, Expiry: {listing.expiry}
          </li>
        ))}
      </ul>
      <button>Add New Listing</button>
    </div>
  );
};

export default DonorDashboard;

