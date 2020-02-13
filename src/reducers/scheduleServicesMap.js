import { SET_SCHEDULE_SERVICES_MAP } from '../actions/actionTypes';

const scheduleServicesMap = (state, action) => {
  switch (action.type) {
    case SET_SCHEDULE_SERVICES_MAP:
      return action.payload;
    default:
      return state;
  }
};

export default scheduleServicesMap;
