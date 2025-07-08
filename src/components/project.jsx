import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Project.css";
import project1 from "../images/Project/project1.png";
import project2 from "../images/Project/project2.png";
import project3 from "../images/Project/project3.png";
import project4 from "../images/Project/project4.png";
import project5 from "../images/Project/project5.png";
import project6 from "../images/Project/project6.png";
import project7 from "../images/Project/project7.png";
import project8 from "../images/Project/project8.png";
import project9 from "../images/Project/project9.png";
import project10 from "../images/Project/project10.png";
import project11 from "../images/Project/project11.png";



const projects = [
  {
    title: "Job Application Tracker",
    desc: "A MERN-stack CRUD application that helps users efficiently track job applications. Features include creating, editing, updating, and deleting applications with real-time UI updates and status management",
    link: "https://job-application-details.netlify.app/",
    img: project11,
  },
  {
    title: "Urbé Shoe Store",
    desc: "A modern, responsive shoe e-commerce website featuring an engaging UI and seamless user experience. Built to showcase products and simulate a real shopping experience.",
    link: "https://urbe-shoes.netlify.app/",
    img: project9,
  },
  {
    title: "Student Registration",
    desc: "A backend-based CRUD application for managing student records. Allows admin users to register students, view details, View information",
    link: "https://studentregistration-skcp.onrender.com",
    img: project10,
  },
  {
    title: "Turf – Sports Venue Booking Platform",
    desc: "A single-page web app for booking sports venues, enabling users to search, reserve, and manage reservations seamlessly.",
    link: "https://narayananmanikandan.github.io/Single-page/",
    img: project1,
  },
  {
    title: "MK Fitness Gym Website",
    desc: "A multi-page website designed for a fitness gym to showcase services, schedules, and membership plans.",
    link: "https://narayananmanikandan.github.io/Multiple-page/",
    img: project2,
  },
  {
    title: "MuscleMetrics Dashboard",
    desc: "A web application for booking sports venues, allowing users to search, book, and manage their reservations easily.",
    link: "https://narayananmanikandan.github.io/GymDashboard/",
    img: project3,
  },
  {
    title: "AI & Automation – WordPress Single Page Website",
    desc: "A single-page WordPress site focused on AI & automation insights with modern UI and engaging content.",
    link: "https://narayananmanikandan.github.io/Ai-Automation-Wordpress/",
    img: project4,
  },
  {
    title: "Scoopify – WordPress Multi-Page Website",
    desc: "A multi-page WordPress website for Scoopify, showcasing ice cream flavors, locations, and customer experiences.",
    link: "https://narayananmanikandan.github.io/Icecream-Wordpress/",
    img: project5,
  },
  {
    title: "Just Do It – Firebase Task Manager",
    desc: "A real-time task management web app using Firebase, HTML, CSS, and JavaScript for instant task sync and updates.",
    link: "https://narayananmanikandan.github.io/Todo-List-App-in-Fire-Base/",
    img: project6,
  },
  {
    title: "Feedback Form",
    desc: "A Node.js, Express, MongoDB, and EJS app for managing customizable feedback forms and viewing dynamic responses.",
    link: "https://feedbackform-7ccc.onrender.com",
    img: project8,
  },
  {
    title: "QR Code Generator",
    desc: "A backend-powered web app that generates QR codes from user input using Node.js and Express",
    link: "https://qr-code-t5pp.onrender.com",
    img: project7,
  },
  // Add more...
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="hacker-projects" id="Projects">
      <h2 className="section-title-project"> Projects </h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" data-aos="fade-up" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <h3 className="glitch" data-text={project.title}>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer">[ VIEW ]</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
