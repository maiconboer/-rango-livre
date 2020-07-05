import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rango-livre.herokuapp.com',
});

export default api;
