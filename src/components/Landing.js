import React from 'react'
import LandingCarousel from './Landing/LandingCarousel'
const Config = require('../config.json') 

const Landing = () => (        
        <div id="landing" className="landing">
            <div className="landing-left">
                <div className="landing-left-container">
                    <p className="landing-title">EKL Kitchen</p>
                    <p className="landing-subtitle">High Quality, Craftsmanship Spirit Powered</p>
                    <a href="#ContactUs" >
                        <button className="landing-btn">
                            <div>CONTACT US</div>
                        </button>
                    </a>
                </div>
            </div>
            <LandingCarousel />
        </div>         
)

export default Landing