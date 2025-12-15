import React from "react";
import "./Classroom.css";

import classroom from "./images/classroom.webp";
import classroom1 from "./images/classroom1.webp";

const Classroom = () => {
  return (
    <div className="learning-modes-container">

      {/* Online Live Card */}
      <div className="mode-card">
        <h3 className="mode-title">Online Live</h3>
        <p className="mode-description">
          Attend interactive live online instructor-led classes from the comfort of your home.
        </p>
        <img src={classroom1} alt="Online Live Class" className="mode-image" />
      </div>

      {/* Classroom Card */}
      <div className="mode-card">
        <h3 className="mode-title">Classroom</h3>
        <p className="mode-description">
          Learn physically at Vision Computers, Kodad, and gain hands-on experience.
        </p>
        <img src={classroom} alt="Classroom Training" className="mode-image" />
      </div>

    </div>
  );
};

export default Classroom;
