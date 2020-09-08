import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from './MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from '../../actions';

const Menu = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu);

  useEffect(() => {
    localStorage.removeItem('item');
    dispatch(fetchMenu());
  }, [dispatch]);

  return menu ? (
    <main className="mw7 center">
      {menu.map(item => (
        <MenuItem key={item._id} item={item} />
      ))}
      <div className="flex justify-center mt2">
        <button
          onClick={() => history.push('/addOrEdit')}
          className="b black-70 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
        >
          Add Item
        </button>
      </div>
    </main>
  ) : (
    <p>No menu items</p>
  );
};

export default Menu;
