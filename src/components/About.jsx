import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/About.css';
import aboutprofileimg from "../images/aboutprofileimg.png"

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="about-section" data-aos="fade-up" id="About">
      <div className="about-container">
        <div className="profile-pic" data-aos="zoom-in">
          <img src={aboutprofileimg} alt="Narayanan" className='profile-animation' />
        </div>
        <div className="about-content" data-aos="fade-right">
          <h2 className="section-title">About me</h2>
          <h3 className="role">FULL STACK DEVELOPER</h3>
          <p className="about-description">
            Hi, I’m <strong>Narayanan Manikandan,</strong> a passionate full-stack web developer with a strong focus on building modern, responsive, and scalable web applications using the MERN stack (MongoDB, Express.js, React, and Node.js).
          </p>
          <p className="about-description">
            I believe in continuous learning and stay up-to-date with modern tools and technologies to enhance both performance and user experience. Problem-solving is at the core of my process — I love understanding challenges, brainstorming solutions, and delivering results that exceed expectations.
          </p>
          <div className="about-buttons" data-aos="fade-up" data-aos-delay="200">
            <button className="btn collaborate" onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })}>Let’s Collaborate</button>
            <button className="btn resume" onClick={() => window.open('/Narayanan-Manikandan-Full Stack Development-Resume.pdf', '_blank')}>View My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};
