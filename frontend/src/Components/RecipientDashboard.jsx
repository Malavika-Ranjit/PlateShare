// src/components/RecipientDashboard.jsx
import React from 'react';
import './RecipientDashboard.css';

const RecipientDashboard = () => {
  const claims = [
    { food: 'Apple', quantity: 5, status: 'Claimed' },
    { food: 'Banana', quantity: 3, status: 'Pending' }
  ];

  return (
    <div>
      <h3>Your Claims</h3>
      <ul>
        {claims.map((claim, index) => (
          <li key={index}>
            {claim.food} - {claim.quantity} items, Status: {claim.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipientDashboard;
