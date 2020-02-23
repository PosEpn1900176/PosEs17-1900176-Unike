import { SET_CURRENT_POSITION_MAP } from '../actions/actionTypes';

const currentPositionMap = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_POSITION_MAP:
      return action.payload;
    default:
      return state;
  }
};

export default currentPositionMap;
