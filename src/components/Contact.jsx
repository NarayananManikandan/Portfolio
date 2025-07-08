import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Contact.css'; // Make sure to create this CSS file

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section className="contact-section" id="Contact">
            <h2 className="contact-title" data-aos="fade-down">Contact Me</h2>
            <p className="contact-subtitle" data-aos="fade-up">
                LET’S CONNECT! YOU CAN EMAIL ME AT <br />
                <strong>NARAYANANMANIKANDAN04@GMAIL.COM</strong>
            </p>

            <div className="contact-container">
                <form className="contact-form" data-aos="fade-right">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>

                <div className="contact-illustration" data-aos="fade-right">
                    <img src="../src/images/contact-illustration.png" alt="Contact Illustration" />
                </div>
            </div>

            <footer className="contact-footer" data-aos="fade-up">
                <p>Narayanan Manikandan. All Rights Reserved</p>
                <div className="social-icons">
                    <a href="#"><img src="../src/images/instagram.png" alt="Instagram" /></a>
                    <a href="#"><img src="../src/images/linkedin.png" alt="LinkedIn" /></a>
                    <a href="#"><img src="../src/images/email.png" alt="Email" /></a>
                </div>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Refund Policy</a>
                </div>
            </footer>
            <div>
                <img src="../src/images/footerway.png" alt="Contact Illustration" className='footerway' />
            </div>
        </section>
    );
}
export default Contact;
