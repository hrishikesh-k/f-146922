import { HandlerEvent } from '@netlify/functions';
import { experiences, WorkExperience } from './mocks/experiences';

exports.handler = async function (event: HandlerEvent) {
  const acceptLanguage = event.headers['accept-language'];
  const convertToCorrectLanguage = (experiences: WorkExperience[]) => {
    if(!acceptLanguage) {
      return [];
    }
    const newExperiences = experiences.map(experience => {
      return {
        ...experience,
        title: experience.translations[acceptLanguage].title,
        company: experience.translations[acceptLanguage].company,
        location: experience.translations[acceptLanguage].location,
        responsibilities: experience.translations[acceptLanguage].responsibilities,
        startDate: experience.translations[acceptLanguage].startDate,
        endDate: experience.translations[acceptLanguage].endDate,

      }
    });
    return JSON.stringify(newExperiences)
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: convertToCorrectLanguage(experiences),
    }
}