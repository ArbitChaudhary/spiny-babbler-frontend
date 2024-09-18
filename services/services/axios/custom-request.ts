import axios from 'axios';
import { getFirebaseUserToken } from '../../firebase';

const customRequest = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000,
  timeoutErrorMessage: 'axios request timeout',
});

customRequest.interceptors.request.use(async (config) => {
  const idToken = await getFirebaseUserToken();

  if (idToken) {
    config.headers['Authorization'] = `Bearer ${idToken}`;
  }

  return config;
});

export { customRequest };
