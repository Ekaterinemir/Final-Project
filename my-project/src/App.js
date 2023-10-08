import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import House from './components/House';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home'; 

//App component is defining the application's main structure and routing using React Router.Inside the Routes
// component, it associates each route path with a specific component to render when the user navigates to that path.
//It's a central file that orchestrates the rendering and behavior of the entire React application.
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
