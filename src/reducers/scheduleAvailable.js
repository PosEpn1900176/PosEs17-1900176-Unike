import { LOAD_SCHEDULE_AVAILABLE } from '../actions/actionTypes';

const initialStore = [];

const scheduleAvailableReducer = (state = initialStore, action) => {
  switch (action.type) {
    case LOAD_SCHEDULE_AVAILABLE:
      return action.payload;
    default:
      return state;
  }
};

export default scheduleAvailableReducer;
