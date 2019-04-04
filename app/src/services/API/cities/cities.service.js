
import BaseService from '../base.service';


class CitiesService {

  constructor() {
    this.baseModuleUrl = '/cities';
  }

  async getCities() {
    const url = this.baseModuleUrl + '/';
    return await BaseService.get(url);
  }
}

export default new CitiesService;
