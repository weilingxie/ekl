import React from 'react'
import Logo from '../images/EKL-logo.svg'

const Navbar = () => {  
    return (        
          <div id="navbar" className="navbar"> 
            <img className="logo" src={Logo} alt="EKL Kitchens" />
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
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
            <label for="nav-toggle" class="nav-toggle-label">
              <span></span>
            </label>
          </div>
    )
}

export default Navbar
