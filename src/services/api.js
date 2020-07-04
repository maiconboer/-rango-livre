import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rango-livre.herokuapp.com',
});

export default api;
