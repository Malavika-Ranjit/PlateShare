import React, { useState } from 'react';
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

export default FoodListingsPage;
