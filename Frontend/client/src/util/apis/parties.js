import axios from 'axios';
const BASE_URL = 'http://192.168.1.233:5000/api/v1/parties';
// const BASE_URL = 'http://HOST IP ADDRESS:5000/api/v1/parties'; replace w/ host ip address

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
