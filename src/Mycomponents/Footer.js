import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import visionlogo from './images/visionlogo.png'; // Update this path as per your project

const Footer = () => {
  return (
    <div className="footer">
      {/* Left Box: Logo and Institute Info */}
      <div className="footer-section">
        <div className="footer-logo">
          <img src={visionlogo} alt="./images/visionlogo.png" className="logo-image" />
          <div>
            <div className="footer-title">VISION</div>
            <div className="footer-subtitle">COMPUTERS</div>
          </div>
        </div>
        
      </div>
        {/* Quick Links */}
        <div className="footer-section">
        <h3>Quick Links</h3>
         <div className="nav-section">
                    <Link to="/">HOME</Link><br></br>
                    <Link to="/courses">COURSES</Link><br></br>
                    <Link to="/aboutus">ABOUT </Link><br></br>
                    <Link to="/contact">CONTACT</Link><br></br>
                  </div>
      </div>

      {/* Location + Contact */}
      <div className="footer-section">
        <h3>Location</h3>
        <p>PRAMEELA TOWERS<br />Near  Bus Stand,<br />KODAD – 508206.</p>
        <h3>Contact Us</h3>
        <p>8143123768<br />6300400137</p>
      </div>
    </div>
  );
  
};

export default Footer;

