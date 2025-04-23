import type { HandlerEvent } from '@netlify/functions';

import type { Certification, Education } from './mocks/educations';
import { certificationsList, educationsList } from './mocks/educations';

exports.handler = async function (event: HandlerEvent) {
  const acceptLanguage = event.headers['accept-language'];
  const convertToCorrectLanguage = (educations: Education[], certifications: Certification[]) => {
    if (!acceptLanguage) {
      return [];
    }
    const newCertifications = certifications.map((certification) => {
      return {
        ...certification,
        course: certification.translations[acceptLanguage].course,
        provider: certification.translations[acceptLanguage].provider,
        year: certification.translations[acceptLanguage].year,
      };
    });
    const newEducations = educations.map((education) => {
      return {
        ...education,
        degree: education.translations[acceptLanguage].degree,
        startDate: education.translations[acceptLanguage].startDate,
        endDate: education.translations[acceptLanguage].endDate,
        institution: education.translations[acceptLanguage].institution,
      };
    });
    return JSON.stringify({
      educations: newEducations,
      certifications: newCertifications,
    });
  };

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: convertToCorrectLanguage(educationsList, certificationsList),
  };
};
