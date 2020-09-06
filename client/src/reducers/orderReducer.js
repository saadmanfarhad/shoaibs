import { ADD_ITEM, UPDATE_ORDER } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      const newState = [...state, action.payload];
      localStorage.setItem('order', JSON.stringify(newState));
      return newState;
    case UPDATE_ORDER:
     return action.payload;
    default:
      return state;
  }
}
