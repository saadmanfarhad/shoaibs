import axios from 'axios';
import {
  FETCH_MENU,
  UPDATE_MENU,
  ADD_MENU,
  ADD_ITEM,
  UPDATE_CHECKOUT,
  CLEAR_CHECKOUT,
  PLACE_ORDER,
  FETCH_ORDER,
  UPDATE_ORDER
} from './types';

export const fetchMenu = () => async dispatch => {
  const res = await axios.get('/api/menu');

  dispatch({ type: FETCH_MENU, payload: res.data });
};

export const addMenu = (menuItem, history) => async dispatch => {
  const res = await axios.post('/api/menu', menuItem);
  if (res.data.status) {
    alert('Item Added Successfully');
    history.push('/menu');
  } else {
    alert('Error, please try again!');
  }

  dispatch({ type: ADD_MENU, payload: res.data });
};

export const updateMenu = (menuItem, history) => async dispatch => {
  const res = await axios.put('/api/menu', menuItem);
  if (res.data.status) {
    alert('Item Edited Successfully');
    history.push('/menu');
  } else {
    alert('Error, please try again!');
  }

  dispatch({ type: UPDATE_MENU, payload: res.data });
};

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM, payload: item });
};

export const updateCheckout = checkout => dispatch => {
  dispatch({ type: UPDATE_CHECKOUT, payload: checkout });
};

export const clearCheckout = () => dispatch => {
  dispatch({ type: CLEAR_CHECKOUT, payload: null });
};

export const placeOrder = (order, history) => async dispatch => {
  const res = await axios.post('/api/order', order);
  if (res.data.status) {
    localStorage.removeItem('order')
    alert('Order Placed Successfully');
    history.push('/');
  } else {
    alert('Error, please try again!');
  }

  dispatch({ type: PLACE_ORDER, payload: res.data });
};

export const fetchOrder = () => async dispatch => {
  const res = await axios.get('/api/order');

  dispatch({ type: FETCH_ORDER, payload: res.data });
};

export const updateOrder = order => async dispatch => {
  const res = await axios.put('/api/order', order);
  if (res.data.status === false) {
    alert('Error, please try again!');
  }

  dispatch({ type: UPDATE_ORDER, payload: res.data });
};