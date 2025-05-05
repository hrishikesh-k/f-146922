'use client';

import dynamic from 'next/dynamic';
const About = dynamic(() => import('@/components/HomeSections/About'), { ssr: false });
const Contact = dynamic(() => import('@/components/HomeSections/Contact'), { ssr: false });
const Designs = dynamic(() => import('@/components/HomeSections/Designs'), { ssr: false });
const Experience = dynamic(() => import('@/components/HomeSections/Experience'), { ssr: false });
const Intranets = dynamic(() => import('@/components/HomeSections/Intranets'), { ssr: false });
const MainProjects = dynamic(() => import('@/components/HomeSections/MainProjects'), {
  ssr: false,
});
const Skills = dynamic(() => import('@/components/HomeSections/Skills'), { ssr: false });

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
