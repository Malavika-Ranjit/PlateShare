// src/components/DonorListingForm.jsx
import React, { useState } from 'react';
import './DonorListingForm.css';

const DonorListingForm = () => {
  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ food, quantity, expiry });
    // Handle the logic to add a new food listing, e.g., send it to the backend.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food Name"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="date"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <button type="submit">Add Listing</button>
    </form>
  );
};

export default DonorListingForm;

