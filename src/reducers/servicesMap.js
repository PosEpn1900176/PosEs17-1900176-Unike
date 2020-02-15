import { combineReducers } from 'redux';
import availableServicesMap from './availableServicesMap';
import scheduledServicesMap from './scheduleServicesMap';

const servicesMapReducer = combineReducers({
  scheduled: scheduledServicesMap,
  categoria: availableServicesMap,
});

export default servicesMapReducer;
