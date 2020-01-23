import { combineReducers } from 'redux';
import signupReducer from './signup';

const Reducers = combineReducers({
  signup: signupReducer,
});

export default Reducers;
