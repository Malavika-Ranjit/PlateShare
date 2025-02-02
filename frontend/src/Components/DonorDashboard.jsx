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
/*import React from 'react';
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

export default DonorDashboard;*/

import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";
import "./DonorDashboard.css";

const DonorDashboard = () => {
  const [newListing, setNewListing] = useState({
    name: "",
    quantity: 0,
    expiry: "",
    contactNumber: "",
  });

  // Retrieve donor email from localStorage (stored at login)
  const donorEmail = localStorage.getItem("userEmail");

  // Function to handle adding a new listing to Firestore
  const handleAddListing = async () => {
    if (!donorEmail) {
      alert("Error: Donor email not found. Please log in again.");
      return;
    }

    try {
      await addDoc(collection(db, "donors"), {
        name: newListing.name,
        quantity: newListing.quantity,
        expiry: newListing.expiry,
        contactNumber: newListing.contactNumber,
        donorEmail, // Store donor's email in Firestore
        status: "Available",
      });

      alert("Listing added successfully!");

      // Clear input fields after adding the listing
      setNewListing({
        name: "",
        quantity: 0,
        expiry: "",
        contactNumber: "",
      });
    } catch (error) {
      console.error("Error adding listing: ", error);
    }
  };

  return (
    <div className="donor-dashboard">
      <h3>Your Food Listings</h3>

      {/* Form to add new listing */}
      <div>
        <h4>Add New Listing</h4>
        <input
          type="text"
          placeholder="Item Name"
          value={newListing.name}
          onChange={(e) =>
            setNewListing({ ...newListing, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newListing.quantity}
          onChange={(e) =>
            setNewListing({ ...newListing, quantity: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Expiry Date"
          value={newListing.expiry}
          onChange={(e) =>
            setNewListing({ ...newListing, expiry: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={newListing.contactNumber}
          onChange={(e) =>
            setNewListing({ ...newListing, contactNumber: e.target.value })
          }
        />
        <button onClick={handleAddListing}>Add Listing</button>
      </div>
    </div>
  );
};

export default DonorDashboard;
