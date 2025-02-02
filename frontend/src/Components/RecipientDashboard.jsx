/*import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './RecipientDashboard.css';

const RecipientDashboard = () => {
  const [claims, setClaims] = useState([]);

  // Fetch data from Firestore when the component mounts
  useEffect(() => {
    const fetchClaims = async () => {
      try {
        // Fetch all documents from the 'donors' collection
        const querySnapshot = await getDocs(collection(db, 'donors'));

        // Map over the documents and extract necessary fields
        const donorClaims = querySnapshot.docs.map(doc => ({
          id: doc.id, // Optional: you can keep the document ID
          ...doc.data(),
        }));

        // Set the state with the fetched data
        setClaims(donorClaims);
      } catch (error) {
        console.error('Error fetching claims: ', error);
      }
    };

    fetchClaims();
  }, []); // Empty dependency array to fetch data on mount

  return (
    <div>
      <h3>Your Claims</h3>
      <ul>
        {claims.length > 0 ? (
          claims.map((claim) => (
            <li key={claim.id}>
              {claim.name} - {claim.quantity} items, Expiry: {claim.expiry}, Status: {claim.status || 'Pending'}
            </li>
          ))
        ) : (
          <p>No claims available.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipientDashboard; */

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './RecipientDashboard.css';

const RecipientDashboard = () => {
  const [foodListings, setFoodListings] = useState([]);
  const recipientEmail = localStorage.getItem('userEmail'); // Assuming email is stored on login

  useEffect(() => {
    const fetchFoodListings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'donors'));
        const listings = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFoodListings(listings);
      } catch (error) {
        console.error('Error fetching food listings: ', error);
      }
    };

    fetchFoodListings();
  }, []);

  const handleClaim = async (listing) => {
    try {
      await addDoc(collection(db, 'claims'), {
        // donorEmail: listing.donorEmail,
        // recipientEmail,
        foodName: listing.name,
        quantity: listing.quantity,
        expiry: listing.expiry,
        status: 'claimed',
        claimedBy : recipientEmail,
      });
      alert(`Claimed`);

      // Remove claimed item from the available list
      setFoodListings(foodListings.filter(item => item.id !== listing.id));
    } catch (error) {
      console.error('Error claiming food: ', error);
    }
  };

  return (
    <div>
      <h3>Available Food Listings</h3>
      <ul>
        {foodListings.length > 0 ? (
          foodListings.map((listing) => (
            <li key={listing.id}>
              {listing.name} - {listing.quantity} items, Expiry: {listing.expiry}
              <br />
              Donor: {listing.donorEmail}
              <button onClick={() => handleClaim(listing)}>Claim</button>
            </li>
          ))
        ) : (
          <p>No food listings available.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipientDashboard;

