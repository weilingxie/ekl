import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Landing from './components/Landing'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import ContactUs from './components/ContactUs'
import './App.scss';

function App() {
  return (    
    <Router>     
      <Landing />
      <AboutUs />
      <Projects />      
      <ContactUs />      
    </Router>        
  );
}

export default App;
