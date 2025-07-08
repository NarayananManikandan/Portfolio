import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Contact.css'; // Make sure to create this CSS file
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"
import footerway from "../images/footerway.png"
import contact from "../images/contact-illustration.png"

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section className="contact-section" id="Contact">
            <h2 className="contact-title" data-aos="fade-down">Contact Me</h2>
            <p className="contact-subtitle" data-aos="fade-up">
                LET’S CONNECT! YOU CAN EMAIL ME AT <br />
                <strong className='contact'>NarayananManikandan04@gmail.com</strong>
            </p>

            <div className="contact-container">
                <form className="contact-form" data-aos="fade-right">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>

                <div className="contact-illustration" data-aos="fade-right">
                    <img src= {contact} alt="Contact Illustration" />
                </div>
            </div>

            <footer className="contact-footer" data-aos="fade-up">
                <p>Narayanan Manikandan. All Rights Reserved</p>
                <div className="social-icons">
                    <a href="#"><img src= {instagram}alt="Instagram" /></a>
                    <a href="#"><img src={linkedin}alt="LinkedIn" /></a>
                    <a href="#"><img src={email} alt="Email" /></a>
                </div>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Refund Policy</a>
                </div>
            </footer>
            <div>
                <img src= {footerway} alt="Contact Illustration" className='footerway' />
            </div>
        </section>
    );
}
export default Contact;
