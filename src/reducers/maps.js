import { combineReducers } from 'reudx';
import scheduleServicesMap from './scheduleServicesMap';

const mapsReducers = combineReducers({
  scheduleService: scheduleServicesMap,
});

export default mapsReducers;
