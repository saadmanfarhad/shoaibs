import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  menu: menuReducer,
  order: orderReducer
});
