import { combineReducers } from 'redux';
import signupReducer from './signup';
import userReducer from './user';

const Reducers = combineReducers({
  signup: signupReducer,
  user: userReducer,
});

export default Reducers;
