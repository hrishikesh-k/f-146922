import Education from './Education';
import WorkExperience from './WorkExperience';

export default function Experience() {
  return (
    <div className="w-full-container md:flex text-textContrastColor bg-secondary relative border-b-4 border-borderColor">
      <WorkExperience />
      <Education />
    </div>
  );
}
