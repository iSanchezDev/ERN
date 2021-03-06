
import CitiesService from '../services/api/cities/cities.service';
import {message} from 'antd';


// Redux Pure functions
const setCities = (cities) => ({
  type: 'SET_CITIES',
  cities
});


export const getCities = (query) => async dispatch => {
  try {
    const response = await CitiesService.getCities(query);
    if (response.status === 'error') {
      return message.error(response.message);
    }
    dispatch(setCities(response.data));
  } catch (error) {
    message.error(error.message);
  }
};
