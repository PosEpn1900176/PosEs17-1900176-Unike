import { combineReducers } from 'redux';
import availableServicesReducer from './availableServices';
import scheduledServicesReducer from './scheduleServices';
import servicesMapReducer from './servicesMap';

const servicesReducer = combineReducers({
  scheduled: scheduledServicesReducer,
  available: availableServicesReducer,
  map: servicesMapReducer,
});

export default servicesReducer;
