import React, { useState, version } from "react";
import "../css/Hero.css";

import profileImg from "../images/heroimg.png";
import herocolor from "../images/herocolor.png"
import logoImg from "../images/logo.png";
import Vector1 from "../images/Vector-1.png"
import vector from "../images/Vector.png"
import vector2 from "../images/Vector-2.png"

function Hero() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <div id="Home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logoImg} alt="Site Logo" className="logo-img" />
        </div>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </div>

        <ul className={`navbar-right ${isMenuOpen ? "open" : ""}`} >
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" >
        <div className="hero-content">
          <p className="tag animate-fade-up typewriter hero-content-full">FULL STACK DEVELOPER</p>

          <h1 className="animate-slide-up">
            Hi, I’m Narayanan Manikandan<br />
          </h1>
          <div className="desc animate-fade-in-delay ">
            <p>
              I create modern web solutions that are clean, efficient, and user-focused.
              With a sharp eye for design and a passion for problem-solving, I build experiences that work beautifully.
              Let’s bring your next idea to life — the right way.
            </p>
          </div>

          <div className="social-icons">
            <a href="mailto:narayananmanikandan04@gmail.com?subject=Hello%20Narayanan&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!">
              <img src= {Vector1} alt="Icon 1" />
            </a>
            <a href="https://github.com/NarayananManikandan">
              <img src= {vector} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/narayanan-manikandan-0b0a69290/">
              <img src= {vector2} alt="LinkedIn" />
            </a>
          </div>
          <img src={herocolor} alt="" className="herocolorblue" />
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Profile of Narayanan Manikandan" className="animate-wave" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
