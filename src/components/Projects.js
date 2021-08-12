import React, { useState } from 'react'
import Carousel from './Elements/Carousel'

const Projects = () => {
    const defaultType = 'Kitchen'
    const [type,changeType] = useState(defaultType);
    let BaseImageUri = `${process.env.PUBLIC_URL}/images/${type}/`
    console.log(`Current Type = ${type}`)

    return (        
        <div id="projects" className="section projects">
            <div className="projects-left">
                <h1 className="projects-title section-title">Projects</h1>
                <ul className="projects-left-type list-group">
                    <li className={`projects-type list-group-item ${type==="Kitchen" ? "active" : null}`} id="Kitchen" onClick={e=>changeType(e.target.id)}>Kitchen</li>
                    <li className={`projects-type list-group-item ${type==="Vanity" ? "active" : null}`} id="Vanity" onClick={e=>changeType(e.target.id)}>Vanity</li>
                    <li className={`projects-type list-group-item ${type==="Wardrobe" ? "active" : null}`} id="Wardrobe" onClick={e=>changeType(e.target.id)}>Wardrobe</li>
                    <li className={`projects-type list-group-item ${type==="Living" ? "active" : null}`} id="Living" onClick={e=>changeType(e.target.id)}>Living</li>
                </ul>
            </div>
            <div className="projects-right">
                <Carousel 
                image1Uri={`${BaseImageUri}Image1.jpg`} 
                image2Uri={`${BaseImageUri}Image2.jpg`} 
                image3Uri={`${BaseImageUri}Image3.jpg`} 
                />
            </div>
        </div>         
    )
}

export default Projects