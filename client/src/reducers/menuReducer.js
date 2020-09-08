import { FETCH_MENU, UPDATE_MENU, ADD_MENU } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MENU:
      return action.payload;
    case ADD_MENU:
      return state;
    case UPDATE_MENU:
      return state;
    default:
      return state;
  }
}
