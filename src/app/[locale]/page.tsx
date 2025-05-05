import dynamic from 'next/dynamic';

import ClientSideSections from '@/components/HomeSections/ClientSideSections/ClientSideSections';
const About = dynamic(() => import('@/components/HomeSections/About'));
const MainProjects = dynamic(() => import('@/components/HomeSections/MainProjects'));

const Portfolio = () => {
  return (
    <>
      <div id="about-section">
        <About />
      </div>
      <div id="main-projects-section">
        <MainProjects />
      </div>
      <ClientSideSections />
    </>
  );
};

export default Portfolio;
