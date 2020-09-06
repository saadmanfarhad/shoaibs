import axios from 'axios';
import { FETCH_MENU } from './types';

export const fetchMenu = () => async dispatch => {
  const res = await axios.get('/api/menu');

  dispatch({ type: FETCH_MENU, payload: res.data });
};