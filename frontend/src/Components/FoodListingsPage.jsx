/*import React, { useState } from 'react';
import DonorListingForm from './DonorListingForm';
import RecipientListing from './RecipientListing';
import './FoodListingsPage.css'; // Make sure to import the CSS file

const FoodListingsPage = () => {
  const [isDonorView, setIsDonorView] = useState(true);

  return (
    <div className="centered-container">
      <h2>Food Listings</h2>
      <button onClick={() => setIsDonorView(!isDonorView)}>
        Toggle to {isDonorView ? 'Recipient View' : 'Donor View'}
      </button>
      {isDonorView ? <DonorListingForm /> : <RecipientListing />}
    </div>
  );
};

export default FoodListingsPage; */

import React, { useState } from 'react';
import DonorDashboard from './DonorDashboard';
import RecipientDashboard from './RecipientDashboard';
import './FoodListingsPage.css'; // Ensure this is correctly imported

const FoodListingsPage = () => {
  const [isDonorView, setIsDonorView] = useState(true);
  const [listings, setListings] = useState([]); // State to hold the listings

  // Function to add a new listing (passed down to DonorDashboard)
  const addListing = (newListing) => {
    setListings((prevListings) => [...prevListings, newListing]);
  };

  return (
    <div className="centered-container">
      <h2>Food Listings</h2>
      <button onClick={() => setIsDonorView(!isDonorView)}>
        Toggle to {isDonorView ? 'Recipient View' : 'Donor View'}
      </button>

      {/* Conditionally render Donor or Recipient view */}
      {isDonorView ? (
        <DonorDashboard addListing={addListing} />
      ) : (
        <RecipientDashboard />
      )}

      {/* Display listings */}
      {isDonorView && (
        <div>
          <h4>All Food Listings</h4>
          <ul>
            {listings.map((listing) => (
              <li key={listing.id}>
                {listing.name} - {listing.quantity} items, Expiry: {listing.expiry}, Contact: {listing.contactNumber}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodListingsPage;

