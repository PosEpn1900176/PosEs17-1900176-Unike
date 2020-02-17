import { combineReducers } from 'reudx';
import scheduleServicesMap from './scheduleServicesMap';
import availableServicesMap from './availableServicesMap';

const mapsReducers = combineReducers({
  scheduleService: scheduleServicesMap,
  availableServices: availableServicesMap,
});

export default mapsReducers;
