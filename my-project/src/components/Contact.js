
import React, { useState } from 'react';
import Reviews from './reviews';
import './style.css';

//Contact component represents a contact form section for a web application. It includes a form for users 
//to input their contact information (name, email, and message) and submit it. 
const Contact = () => {
  // The component uses the useState hook to manage the state for form fields: contactName, contactEmail, and 
  //contactMessage.
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

    //submitContactForm is a function that handles the form submission. It logs the form data and resets the form fields
    // after submission.
  const submitContactForm = (e) => {
    e.preventDefault();
    console.log('Contact form submitted!', {
      name: contactName,
      email: contactEmail,
      message: contactMessage
    });
    
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
