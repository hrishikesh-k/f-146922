'use client';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('@/components/HomeSections/Contact'), { ssr: false });
const Designs = dynamic(() => import('@/components/HomeSections/Designs'), { ssr: false });
const Experience = dynamic(() => import('@/components/HomeSections/Experience'), { ssr: false });
const Intranets = dynamic(() => import('@/components/HomeSections/Intranets'), { ssr: false });
const Skills = dynamic(() => import('@/components/HomeSections/Skills'), { ssr: false });

export default function ClinetSideSections() {
  return (
    <>
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
}
