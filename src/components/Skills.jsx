import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Skills.css';
import Skillcolor from "../images/Skills/Skillcolor.png"


// Import your icons (place them in /public or /src/images/Skills as needed)
import figma from '../images/Skills/figma.png';
import html from '../images/Skills/html.svg';
import css from '../images/Skills/css.png';
import bootstrap from '../images/Skills/bootstrap.png';
import js from '../images/Skills/js.png';
import firebase from '../images/Skills/firebase.png';
import github from '../images/Skills/github.png';
import jquery from '../images/Skills/jquery.png';
import photoshop from '../images/Skills/photoshop.png';
import wordpress from '../images/Skills/wordpress.png';
import express from '../images/Skills/express.png';
import mongodb from '../images/Skills/mongodb.png';
import mysql from '../images/Skills/mysql.png';
import django from '../images/Skills/django.png';
import python from '../images/Skills/python.png';
import vscode from '../images/Skills/vscode.png';
import react from '../images/Skills/react.png';
import nodejs from '../images/Skills/nodejs.png';
import netlify from '../images/Skills/netlify.png';

const skills = [
  { name: 'Figma', icon: figma },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'BootStrap', icon: bootstrap },
  { name: 'Javascript', icon: js },
  { name: 'Firebase', icon: firebase },
  { name: 'GitHub', icon: github },
  { name: 'JQuery', icon: jquery },
  { name: 'Photoshop', icon: photoshop },
  { name: 'Wordpress', icon: wordpress },
  { name: 'Express JS', icon: express },
  { name: 'Mongo DB', icon: mongodb },
  { name: 'MySQL', icon: mysql },
  { name: 'Django', icon: django },
  { name: 'Python', icon: python },
  { name: 'Visual Studio Code', icon: vscode },
  { name: 'React', icon: react },
  { name: 'Node JS', icon: nodejs },
  { name: 'Netlify', icon: netlify },
];

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="skills-section" id="Skills">
      <h2 className="skills-title" data-aos="fade-up">Skills</h2>
      <p className="skills-subtitle" data-aos="fade-up">Technologies I've been working with recently</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-item"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 50}`}
          >
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
        {/* <img src={Skillcolor} alt="" className='skillcolor' /> */}
      </div>
    </section>
  );
}

export default Skills;
