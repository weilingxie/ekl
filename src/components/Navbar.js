import React from 'react'
import Logo from '../images/EKL-logo.svg'

const Navbar = () => {  
    return (        
          <div id="navbar" className="navbar"> 
            <img className="logo" src={Logo} alt="EKL Kitchens" />
            <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>                                                   
            <nav className="navbar-btns">
                <ul>
                    <li className="navbar-btn navbar-home" >
                      <a href="#home">HOME</a>
                    </li>
                    <li className="navbar-btn navbar-aboutus">
                      <a href="#aboutUs">ABOUT</a>
                    </li>
                    <li className="navbar-btn navbar-services">
                      <a href="#services">SERVICES</a>
                    </li>
                    <li className="navbar-btn navbar-projects">
                      <a href="#projects">PROJECTS</a>
                    </li>
                    <li className="navbar-btn navbar-contactus">
                      <a href="#contactUs">CONTACT</a>
                    </li>
                </ul>                  
            </nav>        
            <label htmlFor="nav-toggle"><i className="fas fa-bars fa-2x nav-toggle-label" ></i></label>           
          </div>
    )
}

export default Navbar
