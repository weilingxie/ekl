import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import MapSection from './map/Map'
const Config = require('../config.json') 

//rfce + enter
const ContactUs = () => {
    const [name, setName ] = useState('');  
    const [email, setEmail ] = useState('');
    const [phone, setPhone ] = useState('');
    const [question, setQuestion] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [questionError, setQuestionError] = useState(false);

    const resetForm = () =>{
        setName('');
        setEmail('');
        setPhone('');
        setQuestion('');
    }

    const resetError = () => {
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);
        setQuestionError(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(question);
        resetError();

        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,5})$/;
        let isValid = true;

        if(!emailRegex.test(email)) {
            setEmailError(true);
            isValid = false;
        }
        
        if(!phoneRegex.test(phone)){
            setPhoneError(true);
            isValid = false;
        }

        if(!name) {
            setNameError(true);
            isValid = false;
        }

        if(!question) {
            setQuestionError(true);
            isValid = false;
        }
            

        if (isValid){
            let templateParams = {
                from_name: email,
                to_name: Config.email,            
                subject: `Question from name=> ${name} email=> ${email}, and phone=> ${phone} from AKC website`,
                message: question,
                phone: phone
            }
    
            emailjs.send(
                Config["email-service"],
                Config["email-template"],
                templateParams,
                Config["email-userId"]
               ).then(()=> {
                    resetForm();
                    alert('Your question has been sent! Thank you!');
               });    
        }                                   
    };    

    return (        
        <div id="contactUs" className="contactUs">
            <div className="info-container">
                <h1 className="section-title">CONTACT US</h1>
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
            </div>                       
            <form className="contactUs-container">
            <div className="contactUs-form">
                    <label htmlFor="contactUs-name">NAME</label>
                    <input id="contactUs-name" value={name} type="text" placeholder="" onChange={e=>setName(e.target.value)} />
                    {nameError&&<p className="contactUs-error">Please provide your name</p>}
                </div>               
                <div className="contactUs-form">
                    <label htmlFor="contactUs-email">EMAIL</label>
                    <input id="contactUs-email" value={email} type="email" placeholder="XXX@gmail.com" onChange={e=>setEmail(e.target.value)} />
                    {emailError&&<p className="contactUs-error">Please provide valid email</p>}
                </div>
                <div className="contactUs-form">
                    <label htmlFor="contactUs-phone">PHONE</label>
                    <input id="contactUs-phone" value={phone} placeholder="XXX-XXX-XXXXX" type="tel" onChange={e=>setPhone(e.target.value)} />
                    {phoneError&&<p className="contactUs-error">Please provide valid phone number</p>}
                </div>
                <div className="contactUs-form">
                    <label htmlFor="contactUs-question">QUESTION</label>
                    <textarea id="contactUs-question" className="contactUs-question" value={question} name="contactUs-question" rows="4" cols="50" onChange={e=>setQuestion(e.target.value)} />                    
                    {questionError&&<p className="contactUs-error">Please provide your question</p>}
                </div>
                <button onClick={e => handleSubmit(e)}>SEND</button>
            </form>
            <MapSection zoomLevel={17} />
        </div>  
    )
}

export default ContactUs
