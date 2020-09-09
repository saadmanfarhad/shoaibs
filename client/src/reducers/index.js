import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';
import checkoutReducer from './checkoutReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  menu: menuReducer,
  form: reduxForm,
  checkout: checkoutReducer,
  order: orderReducer,
  admin: adminReducer
});
