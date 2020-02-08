import { combineReducers } from 'redux';
import signupReducer from './signup';
import userReducer from './user';
import scheduleAvailableReducer from './scheduleAvailable';

const Reducers = combineReducers({
  signup: signupReducer,
  user: userReducer,
  scheduleAvailable: scheduleAvailableReducer,
});

export default Reducers;
