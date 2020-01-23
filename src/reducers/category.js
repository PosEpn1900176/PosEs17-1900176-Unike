import { LOAD_CATEGORY, SET_CATEGORY } from '../actions/actionTypes';

const initialState = {
  loading: true,
  data: [],
  error: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY:
      return action.payload;
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
