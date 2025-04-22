interface Skills {
  name: string;
  level: number;
}

export const languages: Skills[] = [
  { name: "TypeScript", level: 5 },
  { name: "JavaScript", level: 5 },
  { name: "Node.js", level: 3 },
  { name: "CSS", level: 5 },
  { name: "HTML5", level: 5 },
  { name: "SCSS", level: 5 },
  { name: "SQL", level: 3 }
];

export const frameworks: Skills[] = [
  { name: "React", level: 5 },
  { name: "Angular", level: 5 },
  { name: "Next.JS", level: 4 },
  { name: "Tailwind CSS", level: 5 },
  { name: "Redux", level: 5 },
  { name: "Zustand", level: 5 },
  { name: "React Query", level: 5 },
  { name: "Bootstrap", level: 5 }
];

export const testingTools: Skills[] = [
  { name: "Jest", level: 4 },
  { name: "Unit testing", level: 4 },
  { name: "E2E testing", level: 4 },
  { name: "Cypress", level: 4 },
  { name: "Playwright", level: 4 }
];

export const otherTools: Skills[] = [
  { name: "Git", level: 5 },
  { name: "Vite", level: 4 },
  { name: "Webpack", level: 5 },
  { name: "ESLint", level: 5 },
  { name: "CI/CD", level: 5 },
  { name: "AWS", level: 3 },
  { name: "SPA", level: 4 },
  { name: "Analytics", level: 3 }
];