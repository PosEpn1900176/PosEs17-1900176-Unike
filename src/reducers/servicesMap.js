import { combineReducers } from 'redux';
import availableServicesMap from './availableServicesMap';
import scheduledServicesMap from './scheduleServicesMap';
import currentPositionMap from './currentPositionMap';

const servicesMapReducer = combineReducers({
  scheduled: scheduledServicesMap,
  available: availableServicesMap,
  currentPosition: currentPositionMap,
});

export default servicesMapReducer;
