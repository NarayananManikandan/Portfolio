import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Education from "./components/Education";
import "./css/Hero.css"; // or main CSS file
import { About } from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/project";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Hero />
      <About/>
      <Education />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
