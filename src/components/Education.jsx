import React, { useEffect } from "react";
import "../css/About.css";
import icon1 from "../images/education1.png";
import icon2 from "../images/education2.png";
import icon3 from "../images/education3.png";
import educolor from "../images/educolor.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div>
            <section className="education-section" id="education">
                <h2 className="education-title" data-aos="fade-up">Education</h2>

                <div className="education-container">
                    <div className="education-item" data-aos="fade-right">
                        <img src={icon1} alt="Web Development Icon" className="edu-icon" />
                        <div className="edu-details">
                            <h3>Full Stack Development (MERN Stack)</h3>
                            <p><strong>Institute:</strong> Web D School - Chennai</p>
                            <p><strong>Session:</strong> 2024 - 2025</p>
                        </div>
                    </div>

                    <div className="education-item" data-aos="fade-right">
                        <img src={icon2} alt="Graduation Icon" className="edu-icon" />
                        <div className="edu-details">
                            <h3>Bachelor of Commerce in Information Systems Management</h3>
                            <p><strong>Institute:</strong> Guru Nanak Sktls, Velachery, Chennai</p>
                            <p><strong>Session:</strong> 2018 - 2021</p>
                        </div>
                    </div>

                    <div className="education-item" data-aos="fade-right">
                        <img src={icon3} alt="School Icon" className="edu-icon" />
                        <div className="edu-details">
                            <h3>Shri Mangichand Bhandari Jain Higher Secondary School</h3>
                            <p><strong>Institute:</strong> T. Nagar, Chennai</p>
                            <p><strong>Session:</strong> 2012 - 2016</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Education;
