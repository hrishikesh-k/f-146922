import dynamic from 'next/dynamic';
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

    </>
  );
};

export default Portfolio;
