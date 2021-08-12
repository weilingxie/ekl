import React from 'react'
import LandingCarousel from './Elements/Carousel'
const Config = require('../config.json') 

const BaseImageUri = `${process.env.PUBLIC_URL}/images/Landing/`

const Landing = () => (
        <div id="landing" className="section landing">
            <div className="landing-left">
                <div className="landing-left-container">
                    <p className="landing-title">EKL Kitchen</p>
                    <p className="landing-subtitle">High Quality, Craftsmanship Spirit Powered</p>
                    <a href="#contactUs" >
                        <button className="landing-btn">
                            <div>CONTACT US</div>
                        </button>
                    </a>
                </div>
            </div>
            <div className="landing-right">
                <LandingCarousel 
                image1Uri={`${BaseImageUri}Image1.jpg`} 
                image2Uri={`${BaseImageUri}Image2.jpg`} 
                image3Uri={`${BaseImageUri}Image3.jpg`} 
                />
            </div>
        </div>         
)

export default Landing