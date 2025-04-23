import { frameworks, languages, otherTools, testingTools } from './mocks/techSkills';

exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      languages,
      frameworks,
      testingTools,
      otherTools,
    }),
  };
};
