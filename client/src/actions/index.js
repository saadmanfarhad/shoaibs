import axios from 'axios';
import { FETCH_MENU, ADD_ITEM, UPDATE_CHECKOUT, CLEAR_CHECKOUT } from './types';

export const fetchMenu = () => async dispatch => {
  const res = await axios.get('/api/menu');

  dispatch({ type: FETCH_MENU, payload: res.data });
};

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM, payload: item });
};

export const updateCheckout = order => dispatch => {
  dispatch({ type: UPDATE_CHECKOUT, payload: order });
};

export const clearCheckout = () => dispatch => {
  dispatch({ type: CLEAR_CHECKOUT, payload: null });
};
