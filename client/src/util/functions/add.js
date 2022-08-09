import axios from 'axios';

export async function add(data, resourceType) {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    await axios.post(`/api/v1/${resourceType}`, data, config);
  } catch (err) {
    console.log(err);
  }
}
