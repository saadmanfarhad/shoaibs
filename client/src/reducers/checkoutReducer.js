import {
  ADD_ITEM,
  UPDATE_CHECKOUT,
  CLEAR_CHECKOUT,
  PLACE_ORDER
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      const newState = [...state, action.payload];
      localStorage.setItem('checkout', JSON.stringify(newState));
      return newState;
    case UPDATE_CHECKOUT:
      return action.payload;
    case CLEAR_CHECKOUT:
      localStorage.clear();
      return [];
    case PLACE_ORDER:
      if (action.payload.status) {
        return [];
      }

      return state;
    default:
      return state;
  }
}
