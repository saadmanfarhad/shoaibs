import { ADD_ITEM } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      const newState = {
        ...state,
        ...action.payload
      }
      return newState;
    default:
      return state;
  }
}
