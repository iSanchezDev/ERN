
import { SET_CITIES } from './../actions/types';

const initialState = {
  list: []
};


const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        list: action.cities
      };
    default:
      return state
  }
};

export default citiesReducer;
