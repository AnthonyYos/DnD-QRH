import axios from 'axios';

export async function update(url, data) {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    await axios.put(url, data, config);
  } catch (err) {
    console.log(err);
  }
}
