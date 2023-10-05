import React from 'react';
import './style.css';

//Home is a functional component that returns JSX, defining the structure of the homepage.
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to DreamHome Realty</h1>
      <p>
        Our journey doesn't end here. We envision a future where we'll continue
        to innovate, adapt, and embrace new technologies, ensuring that our
        clients have the best possible real estate experience. We look forward
        to many more years of helping you find your perfect home.
      </p>

      <div className="contact-info">
        <p>
          Phone: 123-456-7890;
          <br />
          Fax: 123-456-7891;
        </p>
      </div>

      <img
        src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.webp?b=1&s=170667a&w=0&k=20&c=41IYPuvIWQmDRUXdhWELlGb3IeQulHGQwRCJ_5MtgSo="
        alt="Real Estate"
        
      />
    </div>
  );
};

export default Home;

