import axios from 'axios';

export async function deleteResource(url) {
  try {
    await axios.delete(url);
  } catch (err) {
    console.log(err);
  }
}
