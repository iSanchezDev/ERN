

const API_URL = '/api/v1';



class BaseService {

  /**
   * Generic API call
   * @param {string} url with params
   */
  static async get(url, params) {

    const endpoint = API_URL + url;

    return fetch(endpoint, params)
      .then(res => res.json())
      .catch(error => new Error(error))
      .then(response => response);
  }

  /**
   * Generic API sender media type
   * @param {string} url
   * @param {object} data
   * @param {object} method
   */
  static async send(url, data = {}, method = 'POST') {

    let params;

    if (data) {
      params = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    }

    const endpoint = API_URL + url;

    return fetch(endpoint, {method, ...params})
    .then(res => res.json())
    .catch(error => new Error(error))
    .then(response => response);
  }
}

export default BaseService;
