export interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  id: number;
  course: string;
  provider: string;
  year: string;
}

export interface EducationResponse {
  educations: Education[];
  certifications: Certification[];
}
