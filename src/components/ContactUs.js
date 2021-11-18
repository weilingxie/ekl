import React from "react";
import MapSection from "./map/Map";
import ContactInfo from "./Footer/ContactInfo";
import ContactForm from "./Footer/ContactForm";

const BaseImageUri = `${process.env.PUBLIC_URL}/images/`;

const ContactUs = () => (
  <div id="contactUs" className="section contactUs">
    <div className="info-container">
      <h1 className="section-title">CONTACT US</h1>
      <ContactInfo />
    </div>
    <ContactForm />
    <div className="map">
      <img src={`${BaseImageUri}Map.png`} />
    </div>
  </div>
);

export default ContactUs;
