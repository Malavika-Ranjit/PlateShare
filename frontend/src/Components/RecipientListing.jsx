// src/components/RecipientListing.jsx
import React from 'react';
import './RecipientListing.css';

const RecipientListing = () => {
  const foodList = [
    { name: 'Apple', quantity: 10, expiry: '2025-02-10', location: 'New York' },
    { name: 'Banana', quantity: 5, expiry: '2025-02-12', location: 'Los Angeles' }
  ];

  const handleClaim = (food) => {
    console.log(`Claimed ${food}`);
    // Handle the logic for claiming food (e.g., update backend).
  };

  return (
    <div>
      <h3>Available Food Listings</h3>
      <ul>
        {foodList.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} items, Expiry: {item.expiry}, Location: {item.location}
            <button onClick={() => handleClaim(item.name)}>Claim</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipientListing;
