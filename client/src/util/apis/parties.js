import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/v1/parties';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
