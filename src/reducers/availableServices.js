import { LOAD_AVAILABLE_SERVICES } from '../actions/actionTypes';

const initialStore = [];

const availableServicesReducer = (state = initialStore, action) => {
  switch (action.type) {
    case LOAD_AVAILABLE_SERVICES:
      return action.payload;
    default:
      return state;
  }
};

export default availableServicesReducer;
