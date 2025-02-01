import React from "react";
import './About.css'; // Import the CSS for the About component (if needed)

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <h2>Welcome to PlateShare - Reducing Food Waste, One Donation at a Time</h2>
        <p>
          At PlateShare, we connect food donors (like restaurants, grocery stores, and individuals)
          with those in need. Our platform helps reduce food waste while supporting communities in need
          by facilitating the donation of surplus food.
        </p>
        <p>
          Whether you're looking to donate extra food or claim available donations, PlateShare makes the
          process simple, transparent, and effective.
        </p>
        <ul>
          <li>For Donors: Easily list your surplus food and make a positive impact.</li>
          <li>For Recipients: Browse available food donations and claim what you need.</li>
        </ul>
        <p>Join us in the fight against food waste and help those in need today!</p>
      </div>
    </section>
  );
};

export default About;
