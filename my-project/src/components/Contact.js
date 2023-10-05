
import React, { useState } from 'react';
import Reviews from './reviews';
import './style.css';

//The Contact component represents a contact form section for a web application. 
const Contact = () => {
  // State for form fields: contactName, contactEmail, contactMessage
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

    // Function to handle form submission
  const submitContactForm = (e) => {
    e.preventDefault();
    console.log('Contact form submitted!', {
      name: contactName,
      email: contactEmail,
      message: contactMessage
    });
     // Reset form fields after submission
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  // The component returns JSX to render a contact form and the Reviews component
  return (
    <div className ='contact'>
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={submitContactForm}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            className="form-control"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            rows="5"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      </div>
      <Reviews />
    </div>
    
  );
};

export default Contact;
