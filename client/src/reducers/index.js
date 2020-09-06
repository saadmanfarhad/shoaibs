import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import menuReducer from './menuReducer';
import checkout from './checkoutReducer';

export default combineReducers({
  menu: menuReducer,
  form: reduxForm,
  checkout: checkout
});
