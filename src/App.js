import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import ContactUs from './components/ContactUs'
import Services from './components/Services'
import './App.scss';

function App() {
  return (    
    <Router>
      <Navbar />
      <Landing />
      <Services />
      <AboutUs />      
      <Projects />      
      <ContactUs />      
    </Router>        
  );
}

export default App;
