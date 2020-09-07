import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';
import checkoutReducer from './checkoutReducer';

export default combineReducers({
  menu: menuReducer,
  form: reduxForm,
  checkout: checkoutReducer,
  order: orderReducer
});
