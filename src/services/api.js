import axios from 'axios';

//Install axios to use the API.
//This const will connect the API with this website.
const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export default api;
