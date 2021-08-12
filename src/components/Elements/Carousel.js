import React from 'react'

const LandingCarousel = ({ image1Uri, image2Uri, image3Uri }) => (            
    <div id="carouselIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={image1Uri} className="d-block w-100" alt="landing-image" />
            </div>
            <div className="carousel-item">
                <img src={image2Uri} className="d-block w-100" alt="landing-image" />
            </div>
            <div className="carousel-item">
                <img src={image3Uri} className="d-block w-100" alt="landing-image" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
)

export default LandingCarousel