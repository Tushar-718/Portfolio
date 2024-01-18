import React from 'react'
import "./../contactUs/contact.scss"
import contact from "../../../src/assets/lottie/contact.json";
import Lottie from "lottie-react";

const Contact = () => {
    return (
        <div id="contact" className="container section">
            <h2 className="title">Get In Touch</h2>
            <div className="contactContainer">
                <div className="contactLeft">
                    <div className="contact__img">
                        <Lottie animationData={contact} />
                    </div>
                </div>
                <div className="contactRight">
                    <p>Whether you are starting a project, have business inquiries or just want to say hi, my index is always open so feel free to reach out and i will get back to you.</p>
                    <form action="">
                        <input type="text" name="user_name" className="Name" placeholder='Your Name' required />
                        <input type="email" name="user_email" className="email" placeholder='Your Email' required />
                        <textarea className="message" name="message" rows="6" placeholder='Your Message'></textarea>
                        <div className="submit">
                            <button type="submit" value="Send" className='submitBtn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="infoContainer">
                <div className="personalInfo">
                    <p><i class="fa-solid fa-paper-plane"></i>kumartushar2906@gmail.com</p>
                    <p><i class="fa-solid fa-square-phone"></i>9717481160</p>
                    <p><i class="fa-brands fa-github"></i>https://github.com/Tushar-718</p>
                </div>
                <div className='cvButton'>
                    <a className="btn" href="" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default Contact