import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import checkout from './checkoutReducer';

export default combineReducers({
  menu: menuReducer,
  checkout: checkout
});
