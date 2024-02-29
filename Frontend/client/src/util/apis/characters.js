import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/v1/characters';
// const BASE_URL = 'http://HOST IP ADDRESS:5000/api/v1/characters'; replace w/ host ip address

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
