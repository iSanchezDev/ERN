
import CitiesService from '../services/API/cities/cities.service';
import {message} from 'antd';


// Redux Pure functions
const setCities = (user) => ({
  type: 'SET_CITIES',
  user
});


export const getCities = () => async dispatch => {
  try {
    const response = await CitiesService.getCities();
    if (response.status === 'error') {
      return message.error(response.message);
    }
    dispatch(setCities(response.data));
  } catch (error) {
    message.error(error.message);
  }
};
