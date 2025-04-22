interface Translation {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};

export interface Education {
  id: number;
  translations: Record<string, Translation>;
}

export interface CertificationTranslation {
  course: string;
  provider: string;
  year: string;
}

export interface Certification {
  id: number;
  translations: Record<string, CertificationTranslation>;
}

export const educationsList: Education[] = [
  {
    id: 1,
    translations: {
      en: {
        institution: "FIAP",
        degree: "Bachelor’s in Systems Analysis and Development",
        startDate: "2019",
        endDate: "2023"
      },
      pt: {
        institution: "FIAP",
        degree: "Bacharelado em Análise e Desenvolvimento de Sistemas",
        startDate: "2019",
        endDate: "2023"
      }
    }
  },
  {
    id: 2,
    translations: {
      en: {
        institution: "ETEC Zona Leste",
        degree: "Technical Degree in Systems Development",
        startDate: "2015",
        endDate: "2016"
      },
      pt: {
        institution: "ETEC Zona Leste",
        degree: "Técnico em Desenvolvimento de Sistemas",
        startDate: "2015",
        endDate: "2016"
      }
    }
  }
];

export const certificationsList: Certification[] = [
  {
    id: 1,
    translations: {
      en: {
        course: "Angular, React & Node.js",
        provider: "Alura",
        year: "2021"
      },
      pt: {
        course: "Angular, React e Node.js",
        provider: "Alura",
        year: "2021"
      }
    }
  },
  {
    id: 2,
    translations: {
      en: {
        course: "Web Development",
        provider: "Google Activate",
        year: "2018"
      },
      pt: {
        course: "Desenvolvimento Web",
        provider: "Google Activate",
        year: "2018"
      }
    }
  }
];