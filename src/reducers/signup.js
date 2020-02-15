import { combineReducers } from 'redux';
import categoryReducer from './category';
import contactDataReducer from './contactData';

const SignupReducer = combineReducers({
  contactData: contactDataReducer,
  categoria: categoryReducer,
});

export default SignupReducer;
