import axios from 'axios';

const api = axios.create({ baseURL: 'https://icanhazdadjoke.com/',
headers: {
  accept: 'application/json',
}
});

export default api;
