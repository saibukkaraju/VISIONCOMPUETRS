import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css'; // Import the CSS
import visionlogo from './images/visionlogo.png';


const MenuBar = () => {
  
  return (
    
   
      <>
        {/* Accessible animated top scroll bar */}
        <div className="top-scroll-bar">
          <div className="scroll-text" role="status" aria-live="polite">
            🎉 Admissions Open for New Batches | Contact us for more info! 📞 8143123768.  YOUR SUCCESS IS OUR VISION.
          </div>
        </div>
  
        {/* Main fixed header */}
        <div className="main-header">
          <div className="logo-section">
            <img src={visionlogo} alt="./images/visionlogo.png" className="logo-img" />
          </div>
          <div className="nav-section">
            <Link to="/">HOME</Link>
            <Link to="/courses">COURSES</Link>
            <Link to="/aboutus">ABOUT </Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </>
    );
  };
export default MenuBar;
