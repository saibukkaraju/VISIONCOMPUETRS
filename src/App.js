

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Mycomponents/Home';
import Contact from './Mycomponents/Contact';
import MenuBar from './Mycomponents/MenuBar';
import TrainingServices from './Mycomponents/TrainingServices';
import AboutUs from './Mycomponents/AboutUs';

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<TrainingServices />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
