import { LOAD_SCHEDULE_SERVICES } from '../actions/actionTypes';

const initialStore = [];

const scheduleServicesReducer = (state = initialStore, action) => {
  switch (action.type) {
    case LOAD_SCHEDULE_SERVICES:
      return action.payload;
    default:
      return state;
  }
};

export default scheduleServicesReducer;
