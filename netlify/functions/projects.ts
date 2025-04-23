import type { HandlerEvent } from '@netlify/functions';

import { designProjects, devProjects, intranetProjects, Project } from './mocks/projectLists';

exports.handler = async function (event: HandlerEvent) {
  const path = event.path;
  const slug = path.split('/').pop();
  const acceptLanguage = event.headers['accept-language'];
  const convertToCorrectLanguage = (projects: Project[]) => {
    if (!acceptLanguage) {
      return [];
    }
    const newProjects = projects.map((project) => {
      return {
        ...project,
        name: project.translations[acceptLanguage].name,
        description: project.translations[acceptLanguage].description,
      };
    });
    return JSON.stringify(newProjects);
  };

  switch (slug) {
    case 'main':
      const devSortedProjects = devProjects.sort(
        (projectA, projectB) => projectB.year - projectA.year,
      );
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: convertToCorrectLanguage(devSortedProjects),
      };
    case 'design':
      const designSortedProjects = designProjects.sort(
        (projectA, projectB) => projectB.year - projectA.year,
      );
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: convertToCorrectLanguage(designSortedProjects),
      };
    case 'intranet':
      const intranetSortedProjects = intranetProjects.sort(
        (projectA, projectB) => projectB.year - projectA.year,
      );
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: convertToCorrectLanguage(intranetSortedProjects),
      };
    default:
      return {
        statusCode: 404,
      };
  }
};
