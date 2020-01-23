import { combineReducers } from 'redux';
import categoryReducer from './category';
import contactDataReducer from './contactData';

const Reducers = combineReducers({
  contactData: contactDataReducer,
  categoria: categoryReducer,
});

export default Reducers;
