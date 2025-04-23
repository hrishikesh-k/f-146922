import Link from 'next/link';

import Contact from './Contact';
import Description from './Description';
import './About.scss';

export default function About() {
  return (
    <div className="w-full-container with-texture relative border-b-4 border-borderColor justify-between flex flex-wrap">
      <div className="about__contact md:pt-0">
        <Contact />
      </div>
      <div className="about__description">
        <Description />
      </div>
      <Link href="#main-projects-section">
        <div className="arrow-down hover:scale-105 transition">
          <div className="arrow"></div>
        </div>
      </Link>
    </div>
  );
}
