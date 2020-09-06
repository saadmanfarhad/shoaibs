import { FETCH_MENU } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MENU:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}
