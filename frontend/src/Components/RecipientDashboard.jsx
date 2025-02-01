import React, { useEffect, useState } from 'react';
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

export default RecipientDashboard;
