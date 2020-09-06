import axios from 'axios';
import { FETCH_MENU, ADD_ITEM } from './types';

export const fetchMenu = () => async dispatch => {
  const res = await axios.get('/api/menu');

  dispatch({ type: FETCH_MENU, payload: res.data });
};

export const addItem = (item) =>  dispatch => {
  dispatch({type: ADD_ITEM, payload: item});
}