import React from 'react'
import MapSection from './map/Map'
import ContactInfo from './Footer/ContactInfo'
import ContactForm from './Footer/ContactForm'

const ContactUs = () => (        
    <div id="contactUs" className="contactUs">
        <div className="info-container">
            <h1 className="section-title">CONTACT US</h1>
            <ContactInfo />
        </div>                       
        <ContactForm />
        <MapSection zoomLevel={17} />
    </div>  
)

export default ContactUs
