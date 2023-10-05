import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

// Defining a functional component Footer
const Footer = () => {
// which returns the component's structure and content, using JSX
  return (
    <footer className="footer">
      <Container>
        <p>&copy; 2023 Real Estate Company</p>
      </Container>
    </footer>
  );
};

export default Footer;
