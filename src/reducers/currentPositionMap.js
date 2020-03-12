import { SET_CURRENT_POSITION_MAP } from '../actions/actionTypes';

const initialState = {
  loading: true,
  coords: {
    latitude: -23.564259,
    longitude: -46.652507,
  },
  error: false,
};

const currentPositionMap = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_POSITION_MAP:
      return action.payload;
    default:
      return state;
  }
};

export default currentPositionMap;
