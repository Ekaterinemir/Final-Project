
import React, { useState } from 'react';

//The LoanForm function defines the structure and behavior of a form for entering loan-related information, 
//such as name, Social Security Number, phone number, and loan amount.
const LoanForm = () => {
  const initialFormData = {
    name: '',
    ssn: '',
    phoneNumber: '',
    loanAmount: ''
  };
 
  // It uses the React useState hook to manage the state of the form data (formData).
  const [formData, setFormData] = useState({ ...initialFormData });
  
    //handleInputChange function updates the form data (formData) as the user types in the input fields.
    const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Reset form data to clear input fields
    setFormData({ ...initialFormData }); 
  };

   // The component returns the form with input fields and a submit button
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ssn">Social Security Number</label>
          <input
            type="text"
            className="form-control"
            id="ssn"
            placeholder="SSN"
            value={formData.ssn}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="text"
            className="form-control"
            id="loanAmount"
            placeholder="Loan amount"
            value={formData.loanAmount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
