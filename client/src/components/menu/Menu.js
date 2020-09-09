import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  return (
    <main className="mw7 center">
      <a className="black-70 hover-blue link mb2" href="/order">
        <FontAwesomeIcon
          className="mr1"
          icon="long-arrow-alt-right"
        />
        Orders
      </a>
      {menu ? (
        <>
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
        </>
      ) : (
        <p>No menu items</p>
      )}
    </main>
  );
};

export default Menu;
