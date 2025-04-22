import { Skill } from "@/models/skillModel"

interface Props {
  skill: Skill;
}

export default function SkillItem({skill}: Props) {

  return (
    <div className="text-sm mt-2 min-w-30">
      <div className="opacity-70 text-center">{skill.name}</div>
      <div className="flex flex-wrap justify-center gap-1 mt-1">
        <div className="w-full h-2 bg-quaternary overflow-hidden rounded-full">
          <div className="h-full bg-tertiary" style={{width: `${(skill.level / 5) * 100}%`}}></div>
        </div>
      </div>
    </div>
  )
}