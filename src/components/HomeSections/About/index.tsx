import './About.scss';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Contact = dynamic(() => import('./Contact'));
const Description = dynamic(() => import('./Description'));

export default function About() {
  return (
    <div className="w-full-container with-texture relative border-b-4 border-borderColor justify-between flex flex-wrap">
      <div className="about__contact md:pt-0">
        <Contact />
      </div>
      <div className="about__description">
        <Description />
      </div>
      <Link aria-label="main-projects" href="#main-projects-section">
        <div className="arrow-down hover:scale-105 transition">
          <div className="arrow"></div>
        </div>
      </Link>
    </div>
  );
}
