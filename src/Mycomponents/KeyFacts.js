import React from 'react';
import './KeyFacts.css';
import { FaChalkboardTeacher, FaUserGraduate, FaBuilding, FaBriefcase, FaUsers, FaLaptopCode } from 'react-icons/fa';

const KeyFacts = () => {
  return (
    <section className="key-facts-section">
      <h2 className="title">Key Facts Of VISION COMPUTERS</h2>
      <div className="facts-grid">
        <div className="fact-box">
          <FaChalkboardTeacher className="icon" />
          <p>Practical, Project-Based Training</p>
        </div> 
        <div className="fact-box">
          <FaUserGraduate className="icon" />
          <p>Industry-Relevant Curriculum</p>
        </div>
        <div className="fact-box">
          <FaBriefcase className="icon" />
          <p>Affordable Course Fees</p>
        </div>
        <div className="fact-box">
          <FaLaptopCode className="icon" />
          <p>Personalized Attention to Each Student</p>
        </div>
        <div className="fact-box">
          <FaBuilding className="icon" />
          <p>Career Counseling and Workshops</p>
        </div>
        <div className="fact-box">
          <FaUsers className="icon" />
          <p>Latest Technologies Covered</p>
        </div>
      </div>
    </section>
  );
};

export default KeyFacts;