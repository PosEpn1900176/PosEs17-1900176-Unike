import { LOAD_SCHEDULED_SERVICES } from '../actions/actionTypes';

const initialStore = [];

const scheduledServicesReducer = (state = initialStore, action) => {
  switch (action.type) {
    case LOAD_SCHEDULED_SERVICES:
      return action.payload;
    default:
      return state;
  }
};

export default scheduledServicesReducer;
