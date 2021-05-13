import React from 'react'

const Projects = ()=>{
    return (

        <div id="projects" className ="projects">            
            <div className = "projects-container">
                <div className = "text-container">
                    <h1 className="projects-title">PROJECTS</h1>
                    <a className="projects-more" href="/home">More</a>
                </div>
                <div className="projects-image projects-image1">
                    <img className="projectsimage" src={`${process.env.PUBLIC_URL}/images/ProjectImage1.jpg`} alt="projectImage" />                    
                </div>
                <div className="projects-image projects-image2">
                    <img className="projectsimage" src={`${process.env.PUBLIC_URL}/images/ProjectImage2.jpg`} alt="projectImage" />                    
                </div>                
                <div className ="projects-image projects-image3">
                    <img className="projectsimage" src={`${process.env.PUBLIC_URL}/images/ProjectImage3.jpg`} alt="projectImage" />                    
                </div>
                <div className="projects-image projects-image4">
                    <img className="projectsimage" src={`${process.env.PUBLIC_URL}/images/ProjectImage4.jpeg`} alt="projectImage" />                    
                </div>
            </div>
        </div>
    )
} 

export default Projects 