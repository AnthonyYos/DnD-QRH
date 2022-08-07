import axios from 'axios';

export async function add(character, characterType) {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    await axios.post(`/api/v1/${characterType}`, character, config);
  } catch (err) {
    console.log(err);
  }
}
