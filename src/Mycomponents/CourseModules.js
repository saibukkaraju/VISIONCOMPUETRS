import React from "react";
//import { useState } from "react";
import "./CourseModules.css";
import allcourses4 from './images/allcourses4.jpeg';
//import Footer from './Footer';
//import basicCs from './images/basicCS.jpeg';
//import c from './images/c.png';
//import cplus from './images/cplus.jpeg';
//import java1 from './images/java1.png';
//import python from './images/python.jpeg';
//import react1 from './images/react1.jpeg';
//import django from './images/django.jpeg';
//import html2 from './images/html2.jpeg';
//import css2 from './images/css2.jpeg';
//import js1 from './images/js1.png';
//import interviewskills from './images/interviewskills.jpeg';
//import msoffice from './images/ms office.jpeg';

const modules = [
  {
    title: "BASIC COMPUETR SKILLS",
    duration: "3 weeks",
    points: [
      "Computer Fundamentals,File & Folder Management,Microsoft Office or Google Workspace,Internet & Web Browsing,"],
    color: "#dbeafe", // Light blue
    //images:'./images/basicCS.jpeg',
    
  },
  {
    title: "MS OFFICE",
    duration: "2 weeks",
    points: ["includes a variety of applications such as:MS Word – for creating and formatting documents MS Excel – for data entry, calculations, and analysisMSPowerPoint – for designing professional presentations"],
    color: "#fef3c7", // Yellow
    //image: "/images/ms office.jpeg",
   
  },
  {
    title: "C++",
    duration: "1.5 weeks",
    points: ["C++ is a powerful general-purpose programming language that supports both procedural and object-oriented programming (OOP).Foundation for Learning Programming,Widely Used in System-Level Programming,Object-Oriented Programming (OOP"],
    color: "#fde68a", // Gold
    //image: "/images/cplus.jpeg",
  },
  {
    title: "C",
    duration: "2 weeks",
    points: ["Foundation of Programming Concepts,System-Level Programming,Performance and Efficiency,Portable and Flexible,Base for Other Languages."],
    color: "#c7d2fe",
    //image: "/images/c.png",
  },
  {
    title: "JAVA",
    duration: "4 weeks",
    points: ["Java is a high-level, object-oriented, class-based programming language designed to have as few implementation dependencies as possible. It is known for its Write Once, Run Anywhere (WORA) capability, meaning compiled Java code can run on any platform that supports Java without recompilation."],
    color: "#fbcfe8",
    //image: "/images/java.png",
  },
  {
    title: "PYTHON",
    duration: "1.5 weeks",
    points: ["Python is a high-level, interpreted, and general-purpose programming language known for its simple syntax, readability, and versatility.Beginner-Friendly and Easy to Learn.Versatile and Widely Used.Strong Support for Libraries and Frameworks.In-Demand for Jobs and Freelancing."],
    color: "#a7f3d0",
    //image: "/images/python.jpeg",
  },
  {
    title: "REACT",
    duration: "1 week",
    points: ["React is a JavaScript library developed by Facebook for building user interfaces (UIs), especially for single-page applications (SPAs). Component-Based Architecture.Fast and Efficient.Popular and In-Demand.Strong Community and Ecosystem.Great for Modern Web Apps."],
    color: "#fca5a5",
    //image: "/images/react1.jpeg",
  },
  {
    title: "DJANGO",
    duration: "1.5 weeks",
    points: ["Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.Fast Development.Secure by Default.Scalable and Robust.Perfect for Full-Stack Web Development."],
    color: "#fcd34d",
    //image: "/images/django.jpeg",
  },
  {
    title: "HTML",
    duration: "2 weeks",
    points: ["HTML stands for HyperText Markup Language. It is the standard language used to create the structure of web pages.Foundation of Web Development.Easy to Learn and Use.Compatible with All Browsers."],
    color: "#e9d5ff",
    //image: "/images/html2.jpeg",
  },
  {
    title: "CSS",
    duration: "1 week",
    points: ["CSS is what makes a website visually appealing by adding colors, layouts, fonts, spacing, and design effects. Enables Responsive Web Design. Reduces Code Repetition. Essential for Frontend Development."],
    color: "#bae6fd",
    //image: "/images/css2.jpeg",
  },
  {
    title: "JAVASCRIPT",
    duration: "1 week",
    points: ["JavaScript (JS) is a high-level, interpreted programming language used to create interactive and dynamic content on websites. It is one of the core technologies of the web, alongside HTML and CSS. Client-side scripting. Lightweight & fast."],
    color: "#ddd6fe",
    //images:"/images/js1.jpeg",
  },
  {
    title: "INTERVIEWSKILLS",
    duration: "2 weeks",
    points: ["Interview skills are the combination of communication, presentation, behavioral, and thinking skills you need to effectively showcase your qualifications and personality during job interviews.They help you make a strong impression, answer questions confidently, and increase your chances of getting hired."],
    color: "#fdba74",
    //image: "/images/interviewskills.jpeg",
  },
];

const CourseModules = () => {
  

  return (
    <div className="main-container">
      {/* Left Scrollable Container */}
      <div className="scroll-box">
        <div className="scroll-content">
          {modules.map((mod, index) => (
            <div
              className="module-box"
              key={index}
              style={{ backgroundColor: mod.color }}
            >
              <div className="module-inner">
                <div className="module-content">
                  <h3>Module {index + 1}</h3>
                  <h2>{mod.title}</h2>
                  <p className="duration">Time: {mod.duration}</p>
                  <ul>
                    {mod.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Container */}
      <div className="image-box">
        <img src={allcourses4} alt="./images/allcourses4.jpeg" className="right-image" />
      </div>
    </div>
  );
};

export default CourseModules;