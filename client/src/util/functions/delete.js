import axios from 'axios';

export async function deleteResource(id, resourceType) {
  try {
    await axios.delete(`/api/v1/${resourceType}/${id}`);
  } catch (err) {
    console.log(err);
  }
}
