import { SET_MAP_SCHEDULED_SERVICES } from '../actions/actionTypes';

const initialStore = [];

const scheduledServicesMapReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_MAP_SCHEDULED_SERVICES:
      return action.payload;
    default:
      return state;
  }
};
export default scheduledServicesMapReducer;
