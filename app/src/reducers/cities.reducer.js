
import {
  SET_USER,
  SET_CATEGORIES,
  LOGIN_SPOTIFY,
  SET_FEATURED_PLAYLISTS
} from './../actions/types';

const initialState = [];


const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        ...action.cities
      };
    default:
      return state
  }
};

export default citiesReducer;
