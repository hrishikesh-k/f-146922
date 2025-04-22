import About from "@/components/HomeSections/About";
import Contact from "@/components/HomeSections/Contact";
import Designs from "@/components/HomeSections/Designs";
import Experience from "@/components/HomeSections/Experience";
import Intranets from "@/components/HomeSections/Intranets";
import MainProjects from "@/components/HomeSections/MainProjects";
import Skills from "@/components/HomeSections/Skills";

const Portfolio = () => {
  return (
    <>
      <div id="about-section">
        <About />
      </div>
      <div id="main-projects-section">
        <MainProjects />
      </div>
      <div id="intranets-section">
        <Intranets />
      </div>
      <div id="skills-section">
        <Skills />
      </div>
      <div id="experience-section">
        <Experience />
      </div>
      <div id="design-section">
        <Designs />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
};

export default Portfolio;