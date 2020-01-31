import axios from 'axios';
import { getBasicAuthorization } from './utils';

const http = axios.create({
  baseURL: 'https://unikebr-api.azurewebsites.net/api'
});

http.interceptors.response.use(config => {
  console.log('Config', config)
  return config
});

http.interceptors.request.use(config => {
  config.headers.Authorization = getBasicAuthorization();
  return config;
});

export default http;
