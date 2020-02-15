import { combineReducers } from 'redux';
import availableServicesReducer from './availableServices';
import scheduledServicesReducer from './scheduleServices';

const servicesReducer = combineReducers({
  scheduled: scheduledServicesReducer,
  available: availableServicesReducer,
});

export default servicesReducer;
