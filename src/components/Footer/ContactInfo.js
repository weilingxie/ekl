import React from 'react'
const Config = require('../../config.json') 

const ContactInfo = () => (
    <div className="item-container">
        <section>
            <div className="item item-address">
                <i className="fas fa-map-marked fa-2x"></i>
                <p className="address-text" >{Config.address}</p>
            </div>
        </section>
        <section>
            <div className="item item-email">
                <i className="fas fa-envelope fa-2x"></i>
                <p className="item-email-text" >{Config.email}</p>
            </div>
            <div className="item item-phone">
                <i className="fas fa-phone-square fa-2x"></i>
                <p className="item-phone-text" >{Config.phone}</p>
            </div>
            <div className="footer">
                <p>Copyright © 2021 by EKL Kitchen.</p>
            </div> 
        </section>                                    
    </div>  
)

export default ContactInfo