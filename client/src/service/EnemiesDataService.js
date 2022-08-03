import apiURL from './apiURL';

export default class EnemiesDataService {
  getAll() {
    return apiURL.get('enemies/');
  }
  get(id) {
    return apiURL.get(`enemies/${id}`);
  }
  delete(id) {
    return apiURL.delete(`enemies/${id}`);
  }
}
