import axios from 'axios';

const api = axios.create({
  baseURL: '/.netlify/functions/',
});

api.interceptors.request.use(
  (config) => {
    const langFromUrl = window.location.pathname.split('/')[1];
    const language = langFromUrl || 'en';
    config.headers['Accept-Language'] = language;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
