import { FETCH_ORDER, UPDATE_ORDER } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ORDER:
      return action.payload;
    case UPDATE_ORDER:
      if (action.payload.status === false) return state;

      const newState = state.map(order =>
        order._id === action.payload.message._id
          ? { ...action.payload.message }
          : order
      );
      return newState;
    default:
      return state;
  }
}
