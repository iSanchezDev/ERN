import { combineReducers } from 'redux';
import citiesReducer from './cities.reducer';

export default combineReducers({
  cities: citiesReducer,
});
