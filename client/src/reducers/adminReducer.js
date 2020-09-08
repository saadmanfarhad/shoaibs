import { ADMIN_LOGIN } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        ...state,
        token: action.payload.message
      };
    default:
      return state;
  }
}
