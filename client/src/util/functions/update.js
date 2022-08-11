import axios from 'axios';

export async function update(data, resourceType, id) {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    await axios.put(`/api/v1/${resourceType}/${id}`, data, config);
  } catch (err) {
    console.log(err);
  }
}
