import { Skill } from "@/models/skillModel"
import SkillItem from "./SkillItem"

interface Props {
  skills: Skill[];
  skillTitle: string;
  index: number;
}

export default function SkillList({skills, skillTitle, index}: Props) {

  const isOdd = index % 2 !== 0;
  return (
    <div className={`md:py-8 py-10 px-[8%] ${isOdd ? 'bg-primary' : 'bg-primarySoft'}`}>
      <div className="md:px-5">
        <div className="font-bold tracking-[4px] md:text-left text-center mb-6 md:mb-4">{skillTitle}</div>
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          {skills?.map(skill => 
            <SkillItem key={skill.name} skill={skill}/>
          )}
        </div>
      </div>
    </div>
  )
}