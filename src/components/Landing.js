import React from 'react'
import Logo from '../images/EKL-logo.svg'
//rfce + enter
const Landing = () => {
    
    return (        
        <div id="landing" className="landing">
            <div className="layer">
                <div id="navbar" className="navbar"> 
                    <img className="logo" src={Logo} alt="EKL" />                                                                            
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
                            <a href="#schedule">PROJECTS</a>
                            </li>
                            <li className="navbar-btn navbar-contactus">
                            <a href="#contactUs">CONTACT</a>
                            </li>
                        </ul>                  
                    </nav>        
                    <label htmlFor="nav-toggle"><i className="fas fa-bars fa-2x nav-toggle-label" ></i></label>         
                </div>
                <div className="title">
                    <div className="landing-title-container">
                        <p className="landing-title">EKL Kitchen</p>                
                        <p className="landing-subtitle">High Quality, Craftsmanship Spirit Powered</p>
                    </div>
                </div>               
            </div>
        </div>                     
    )
}

export default Landing
