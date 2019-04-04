
import BaseService from '../base.service';


class CitiesService {

  constructor() {
    this.baseModuleUrl = '/cities';``
  }

  async getCities(query) {
    const url = `${this.baseModuleUrl}/` + (query || '');
    return await BaseService.get(url);
  }
}

export default new CitiesService;
