

const API_URL = '/api/v1';


class BaseService {

  /**
   * Generic API call fetcher
   * @param {string} url with params
   */
  static async get(url) {

    const endpoint = API_URL + url;

    return fetch(endpoint)
      .then(res => res.json())
      .catch(error => new Error(error))
      .then(response => response);
  }
}

export default BaseService;
