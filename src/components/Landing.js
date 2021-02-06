import React from 'react'
//rfce + enter
const Landing = () => {
    
    return (        
        <div id="landing" className="landing">
            <div className="layer">
                <div id="navbar" className="navbar"> 
                    <img src={`${process.env.PUBLIC_URL}/images/akc-logo-small.png`} alt="Logo" />                
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
                        <p className="landing-subtitle">Slogon</p>
                    </div>
                </div>               
            </div>
        </div>                     
    )
}

export default Landing
