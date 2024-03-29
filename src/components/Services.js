import React from "react";

const Services = () => (
  <div id="services" className="section services">
    <div className="services-container">
      <img
        className="image-container"
        src={`${process.env.PUBLIC_URL}/images/ServicesImage.jpg`}
        alt="Services"
      />
      <div className="text-container">
        <div className="text-wrapper">
          <h1 className="section-title">SERVICES</h1>
          <ul>
            <li className="services-text">Kitchen cabinets customize</li>
            <li className="services-text">Interal design</li>
            <li className="services-text">3D Drawing</li>
            <li className="services-text">Shop fitting and renovations</li>
          </ul>
          <p>Free quotes and on site measurement</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
