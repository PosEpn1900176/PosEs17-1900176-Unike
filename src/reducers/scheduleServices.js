import { LOAD_SCHEDULED_SERVICES } from '../actions/actionTypes';

const initialStore = { loading: true, data: [], error: false };

const scheduledServicesReducer = (state = initialStore, action) => {
  switch (action.type) {
    case LOAD_SCHEDULED_SERVICES:
      return action.payload;
    default:
      return state;
  }
};
export default scheduledServicesReducer;
