import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API + 'api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('accessToken'),
  },
});

api.interceptors.request.use(
  (request) => {
    console.log('Starting Request', request);
    return request;
  },
  function (error) {
    console.log('REQUEST ERROR', error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log('RESPONSE ERROR', error);
    let errorMsg = error.message || '';
    if (error.errors && error.errors.message)
      errorMsg = errorMsg + ': ' + error.errors.message;
    console.log(error);
    toast.error(error);
    return Promise.reject(error);
  }
);

export default api;