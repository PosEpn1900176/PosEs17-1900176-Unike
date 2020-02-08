import { combineReducers } from 'redux';
import signupReducer from './signup';
import userReducer from './user';
import availableServicesReducer from './availableServices';
import scheduleServicesReducer from './scheduleServices';

const Reducers = combineReducers({
  signup: signupReducer,
  user: userReducer,
  availableServices: availableServicesReducer,
  scheduleServices: scheduleServicesReducer,
});

export default Reducers;
