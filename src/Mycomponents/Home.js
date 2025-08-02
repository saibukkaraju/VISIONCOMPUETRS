// src/pages/Home.js
import React from 'react';
import Classroom from './Classroom';
import KeyFacts from './KeyFacts';
import OurVision  from './OurVision';
import Scrollcourses from './Scrollcourses';
import Footer from './Footer';
import ScrollingImages from './ScrollingImages';

const Home = () => {
  return (
    <div>
     <ScrollingImages/>
    <Classroom/>
    <OurVision/>
    <Scrollcourses/>
    <KeyFacts/>
    <Footer/>
    </div>
  );
};

export default Home;
