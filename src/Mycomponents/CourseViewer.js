import React, { useState, useEffect,useRef } from "react";
import "./CourseViewer.css";
import basicCs from './images/basicCS.jpeg';
import c from './images/c.png';
import cplus from './images/cplus.jpeg';
import java1 from './images/java1.png';
import python from './images/python.jpeg';
import react1 from './images/react1.jpeg';
import django from './images/django.jpeg';
import html2 from './images/html2.jpeg';
import css2 from './images/css2.jpeg';
import js1 from './images/js1.png';
import interviewskills from './images/interviewskills.jpeg';
import msoffice from './images/ms office.jpeg';
//import blurr from './images/blurr.jpeg';

const coursesData = [
  {
    name: "Basic Computer Skills",
    syllabus: [
      "Introduction to Computers",
    "Types of Computers (Desktop, Laptop, Tablet)",
    "Hardware & Software Basics",
    "Input and Output Devices",
    "Operating System Basics (Windows/Linux)",
    "File and Folder Management",
    "Using the Internet and Web Browsers",
    "Email Basics (Sending, Receiving, Attachments)",
    "Introduction to MS Office (Word, Excel, PowerPoint)",
    "Typing Skills and Keyboard Shortcuts",
    "Understanding Storage Devices (HDD, SSD, USB)",
    "Safety and Security on the Internet",
    "Downloading and Installing Software",
    "Computer Maintenance Basics",
    "Using Cloud Storage (Google Drive, OneDrive)",
    "Digital Citizenship and Online Etiquette",
    "Basic Troubleshooting Techniques",
    ],
    image: basicCs,
    color: "#FFD700",
  },
  {
    name: "MS Office",
    syllabus: [
      // Word
    "Word Processing Basics (MS Word)",
    "Creating, Editing, and Formatting Documents",
    "Using Tables, Images, and Charts in Word",
    "Headers, Footers, and Page Layout",
    "Mail Merge and Templates",
    "Document Review and Collaboration Tools",
    
    // Excel
    "Introduction to Excel Spreadsheets",
    "Working with Cells, Rows, and Columns",
    "Formulas and Functions (SUM, IF, VLOOKUP, etc.)",
    "Charts and Graphs",
    "Data Sorting and Filtering",
    "Pivot Tables and Conditional Formatting",
    
    // PowerPoint
    "Creating PowerPoint Presentations",
    "Designing Slides and Layouts",
    "Using Animations and Transitions",
    "Inserting Images, Videos, and Charts",
    "Slide Show Settings and Presentation Tips",
    
    ],
    image: msoffice,
    color: "#FFA07A",
  },
  {
    name: "C Programming",
    syllabus: [
      "Introduction to C Programming and History",
    "Structure of a C Program and Compilation Process",
    "Variables, Data Types, and Constants",
    "Operators and Expressions",
    "Input and Output Functions (printf, scanf)",
    "Control Statements (if, else, switch, loops)",
    "Loops: for, while, do-while",
    "break, continue, and goto statements",
    "Functions: Declaration, Definition, Calling",
    "Function Arguments and Return Types",
    "Recursion",
    "Arrays: One-Dimensional and Multi-Dimensional",
    "Strings and String Handling Functions",
    "Pointers: Basics, Arithmetic, and Arrays",
    "Pointers with Functions and Structures",
    "Structures and Nested Structures",
    "Unions and Enumerations",
    "File Handling: fopen, fclose, fread, fwrite",
    "Text Files vs Binary Files",
    "Dynamic Memory Allocation (malloc, calloc, realloc, free)",
    "Command Line Arguments",
    "C Preprocessor: #define, #include, #ifdef",
    "Header Files and Modular Programming"
  
    ],
    image: c,
    color: "#E6E6FA",
  },
  {
    name: "C++ Programming",
    syllabus: [
      "Introduction to C++ and Setup",
    "OOPs Concepts (Abstraction, Encapsulation, Inheritance, Polymorphism)",
    "Classes and Objects",
    "Constructors and Destructors",
    "Access Specifiers (public, private, protected)",
    "Member Functions and Inline Functions",
    "Function Overloading and Operator Overloading",
    "Inheritance: Single, Multiple, Multilevel, Hierarchical, Hybrid",
    "Polymorphism: Compile-Time and Run-Time",
    "Virtual Functions and Abstract Classes",
    "Friend Functions and Static Members",
    "Templates (Function and Class Templates)",
    "Exception Handling (try, catch, throw)",
    "File Handling in C++",
    "Standard Template Library (STL): Vectors, Lists, Maps, Sets",
    "Iterators and Algorithms in STL"
    ],
    image: cplus,
    color: "#90EE90",
  },
  {
    name: "Java",
    syllabus: [
      "Introduction to C++ and Setup",
    "OOPs Concepts (Abstraction, Encapsulation, Inheritance, Polymorphism)",
    "Classes and Objects",
    "Constructors and Destructors",
    "Access Specifiers (public, private, protected)",
    "Member Functions and Inline Functions",
    "Function Overloading and Operator Overloading",
    "Inheritance: Single, Multiple, Multilevel, Hierarchical, Hybrid",
    "Polymorphism: Compile-Time and Run-Time",
    "Virtual Functions and Abstract Classes",
    "Friend Functions and Static Members",
    "Templates (Function and Class Templates)",
    "Exception Handling (try, catch, throw)",
    "File Handling in C++",
    "Standard Template Library (STL): Vectors, Lists, Maps, Sets",
    "Iterators and Algorithms in STL",
    ],
    image: java1,
    color: "#FFB6C1",
  },
  {
    name: "Python",
    syllabus: [
      "Introduction to Python and Installation",
    "Syntax, Data Types, and Variables",
    "Operators and Expressions",
    "Control Flow (if, else, elif, loops)",
    "Functions and Modules",
    "Lists, Tuples, Sets, and Dictionaries",
    "String Manipulation and Formatting",
    "Exception Handling (try, except, finally)",
    "File Handling (read, write, append)",
    "Object-Oriented Programming (Classes, Objects, Inheritance)",
    "Lambda Functions and Decorators",
    "Working with Dates and Times",
    "Introduction to NumPy (Arrays, Indexing, Math Operations)",
    "Data Analysis with pandas (Series, DataFrames, GroupBy, Merging)",
    "Basic Data Visualization using matplotlib",
    "Regular Expressions and Pattern Matching",
    "Virtual Environments and Package Management (pip, venv)",
    "Intro to Web Scraping (using requests and BeautifulSoup)"
    ],
    image: python,
    color: "#ADD8E6",
  },
  {
    name: "React",
    syllabus: [
      "Introduction to React and Setup (CRA, Vite)",
    "JSX and Components",
    "Functional vs Class Components",
    "Props and State Management",
    "Event Handling in React",
    "Conditional Rendering and Lists",
    "Forms and Controlled Components",
    "useState and useEffect Hooks",
    "useRef, useReducer, useMemo, useCallback",
    "Component Lifecycle Methods (for class components)",
    "React Router (Routing and Navigation)",
    "Context API for Global State Management",
    "Custom Hooks",
    "React with APIs (fetch, axios)",
    "Styling in React (CSS Modules, Styled Components, Tailwind)",
    "Error Boundaries and Fragments",
    "Code Splitting and Lazy Loading",
    "React Performance Optimization",
    "Introduction to Redux or Zustand (State Management)",
    "Deploying React App (Vercel, Netlify)",
    ],
    image: react1,
    color: "#FFDEAD",
  },
  {
    name: "Django",
    syllabus: [
      "Introduction to Django and Installation",
    "Understanding Django Project Structure",
    "Creating and Managing Django Apps",
    "Models, Views, and Templates (MVT Architecture)",
    "URL Routing and Path Converters",
    "Working with Django Admin Panel",
    "Database Migrations and Model Relationships",
    "Forms and Form Handling (Django Forms & ModelForms)",
    "Authentication and Authorization (Login, Register, Logout)",
    "Session and Cookie Management",
    "Using Static Files and Media Files",
    "Template Inheritance and Filters",
    "Custom Admin Features",
    "Sending Emails in Django",
    "Working with Django REST Framework (DRF) Basics",
    "Deployment on Heroku/Render",
    "Connecting Django with Frontend (React/HTML)",
    "Security Best Practices in Django (CSRF, XSS, SQLi protection)"
    ],
    image: django,
    color: "#D8BFD8",
  },
  {
    name: "HTML",
    syllabus: [
      "Introduction to HTML and its Role in Web Development",
    "Understanding the Structure of an HTML Document",
    "Basic HTML Elements and Tags (Headings, Paragraphs, Links)",
    "Working with Text Formatting Tags (Bold, Italics, Underline)",
    "Creating Lists in HTML (Ordered, Unordered, Definition Lists)",
    "Adding Images and Multimedia to Web Pages",
    "Building Forms with HTML (Input, Textarea, Select, Button)",
    "HTML Tables: Creating and Styling Tables",
    "Anchor Tags and Hyperlinks (Internal and External Links)",
    "Embedding External Content (Iframes)",
    "Introduction to HTML Semantic Elements (Header, Footer, Section, Article, Nav, Main)",
    "Understanding Block-Level vs. Inline Elements",
    "HTML5 Tags and Features (Audio, Video, Data Attributes)",
    "Introduction to HTML Forms and Form Validation",
    "Working with Form Methods (GET, POST) and Attributes",
    "Responsive Web Design Basics (Using Viewport and Media Queries)",
    "HTML Meta Tags and Their Importance (SEO, Charset, etc.)",
    "Working with Static Files (Images, CSS, and JavaScript)",
    "Introduction to Accessibility in HTML (ARIA Attributes)",
    "Best Practices for Writing Clean and Maintainable HTML Code",
    "Optimizing HTML for Web Performance",
    ],
    image: html2,
    color: "#F0E68C",
  },
  {
    name: "CSS",
    syllabus: [
      "Introduction to CSS and its Role in Web Design",
    "CSS Syntax: Selectors, Properties, and Values",
    "Applying CSS Styles to HTML Elements",
    "CSS Box Model (Padding, Margin, Border, and Content)",
    "Working with Text (Font Styles, Text Alignment, Line Height)",
    "Backgrounds and Gradients (Solid, Linear, Radial)",
    "CSS Colors and Color Codes (Hex, RGB, RGBA, HSL)",
    "CSS Selectors (Element, Class, ID, Universal, Attribute)",
    "Grouping, Nesting, and Combining Selectors",
    "CSS Positioning (Static, Relative, Absolute, Fixed, Sticky)",
    "Flexbox Layout: Introduction and Usage",
    "Grid Layout: Introduction and Usage",
    "CSS Overflow and Scrolling",
    "Styling Lists, Tables, and Forms",
    "CSS Transitions and Animations",
    "Media Queries and Responsive Design",
    "Working with Pseudo-classes and Pseudo-elements",
    ],
    image: css2,
    color: "#98FB98",
  },
  {
    name: "JavaScript",
    syllabus: [
      "Introduction to JavaScript and its Role in Web Development",
    "Setting Up JavaScript in a Web Page (Inline, Internal, and External Scripts)",
    "JavaScript Syntax: Variables, Data Types, and Operators",
    "Control Flow: If-Else, Switch Case, Loops (for, while, do-while)",
    "Functions and Function Expressions",
    "Working with Arrays and Array Methods (push, pop, shift, unshift, forEach)",
    "Objects in JavaScript (Properties, Methods, and Constructor Functions)",
    "JavaScript Events (click, hover, keypress, etc.)",
    "DOM Manipulation (Selecting, Changing, Adding, and Removing HTML Elements)",
    "Working with Forms and Validating User Input",
    "Error Handling in JavaScript (try, catch, throw)",
    "JavaScript Closures and Scope (Global vs Local Scope)",
    "ES6 Features: let, const, Arrow Functions, Template Literals",
    "Promises and Asynchronous JavaScript (Callbacks, Promises, Async/Await)",
    "Understanding the `this` Keyword in JavaScript",
    "Working with JSON (Parsing and Stringifying)",
    "JavaScript Classes and Object-Oriented Programming",
    ],
    image: js1,
    color: "#87CEFA",
  },
  {
    name: "Communication Skills",
    syllabus: [
      "Introduction to Communication Skills and their Importance",
    "Verbal Communication: Basics of Effective Speaking",
    "Non-Verbal Communication: Body Language, Gestures, and Facial Expressions",
    "Active Listening and its Role in Effective Communication",
    "Overcoming Communication Barriers",
    "Developing Clear and Concise Communication",
    "Interpersonal Communication: Building Relationships",
    "Public Speaking and Presentation Skills",
    "Voice Modulation and Intonation",
    "Communication in Group Settings and Meetings",
    "Building Confidence in Communication",
    "Business Communication: Writing Emails, Reports, and Memos",
    "Social Media Communication and Etiquette",
    "Cross-Cultural Communication",
    "Persuasion and Negotiation Skills",
    "Conflict Resolution and Difficult Conversations",
    "Communication in Leadership and Management",
    ],
    image: interviewskills,
    color: "#FFE4E1",
  },
];

const CourseViewer = () => {
  const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 1;
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 40); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="total-container">
      <div className="left-panel" ref={scrollRef}>
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="course-box"
            style={{ backgroundColor: course.color }}
            onClick={() => setSelectedCourse(course)}
          >
            <p className="course-name">{course.name}</p>
            <img
              src={course.image}
              alt={course.name}
              className="course-icon"
            />
          </div>
        ))}
      </div>

      <div className="right-panel">
        <h2>{selectedCourse.name}</h2>
        
        <ul>
          {selectedCourse.syllabus.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseViewer;