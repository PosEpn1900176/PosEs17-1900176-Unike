import { combineReducers } from 'redux';
import signupReducer from './signup';
import userReducer from './user';
import servicesReducer from './services';

const Reducers = combineReducers({
  signup: signupReducer,
  user: userReducer,
  services: servicesReducer,
});

export default Reducers;
