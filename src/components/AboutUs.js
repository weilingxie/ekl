import React from 'react'

const AboutUs = ()=>{
    return (

        <div id="aboutUs" className ="aboutUs">
            <h1 className="section-title">ABOUT US</h1>
            <div className = "aboutus-container">
                <div className = "text-container">
                    <p className = "aboutus-text">EKL Kitchens is the leading New Zealand kitchen and cabinet manufacturer. Our mission is to provide our customers with innovative designs of high quality and competitive value. </p>
                    <p className = "aboutus-text">EKL Kitchens is based in Auckland where we have our manufacturing operations as well as our design team. We can tailor every detail of your dream kitchen and manufacture it with the best raw materials.</p>
                    <p className = "aboutus-text">Our factory is equipped with cutting edge CNC routers (computer-controlled cutting and shaping) and modern edging equipment. It ensures an unequalled precision in the making of your Kitchen elements and gives us more flexibility to answer your every need.</p>
                    <p className = "aboutus-text">Our team of skilled carpenters and experienced tradesmen are available to plan and install the most complex projects within stipulated timeframes.</p>
                    <p className = "aboutus-text">Visit our showroom and have a tour of our factories to witness the quality of our craft. Share with us your ideas and EKL will take them to the next level.</p>
                </div>
                <div className ="image-container">
                    <img className="aboutusimage" src={`${process.env.PUBLIC_URL}/images/AboutUsImage.jpg`} alt="AboutUsImage" />                    
                </div>                
            </div>
        </div>
    )
} 

export default AboutUs 