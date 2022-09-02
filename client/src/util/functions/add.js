import axios from 'axios';
import ApiUrl from '../apiUrl';

export async function add(data, url) {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    await axios.post(url, data, config);
  } catch (err) {
    console.log(err);
  }
}
