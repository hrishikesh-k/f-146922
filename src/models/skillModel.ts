export interface Skill {
  name: string;
  level: number;
}

export interface SkillsResponse {
  languages: Skill[];
  frameworks: Skill[];
  testingTools: Skill[];
  otherTools: Skill[];
}
