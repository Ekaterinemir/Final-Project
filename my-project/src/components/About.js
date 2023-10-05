
import React from 'react';
import Loan from './Loan';  
import './style.css';  

// Define the About component
const About = () => {
  return (
    // The "about-container" holds the welcome text section and the loan application form, providing 
    //information about "DreamHome Realty" and facilitating mortgage loan applications.
    <div className="about-container">
      <div className="welcome-text">
        <h3>"DreamHome Realty"</h3>
        <p>
        Our story begins in the early 2000s when a group of passionate real estate professionals came together 
        with a vision of revolutionizing the real estate industry. In 2002, they founded "DreamHome Realty," a 
        company driven by the idea of providing exceptional real estate services to the community.
          Our mortgage loan application process is simple and convenient.Over the years, DreamHome Realty expanded 
          its services and clientele, gaining a reputation for its dedication to honesty, integrity, and customer 
          satisfaction. With each successful transaction, we strengthened our foundation, growing not only in numbers 
          but also in the trust and respect of our clients. 
          Planning to buy a house but need financial assistance? Our mortgage loans are designed to help you turn 
          that dream home into a reality. We offer a range of flexible and competitive mortgage solutions tailored to 
          your needs.

          Apply for a Mortgage Loan
          Fill out the form below to apply for a mortgage loan. Our dedicated team will review your application and
           guide you through the process.
        </p>
      </div>

      <hr />

      <div className="loan-form">
        <h3>Apply for a Mortgage Loan</h3>
        <Loan /> 
      </div>
    </div>
  );
};

export default About;
