import { SET_MAP_SCHEDULED_SERVICES } from '../actions/actionTypes';

const initialStore = { loading: true, data: [], error: false };

const scheduledServicesMapReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_MAP_SCHEDULED_SERVICES:
      return action.payload;
    default:
      return state;
  }
};
export default scheduledServicesMapReducer;
