import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Menu from './menu/Menu';
import Checkout from './checkout/Checkout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem('order'));
    if (order) {
      console.log(order);
      dispatch(actions.updateOrder(order));
    }
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Menu} />
          <Route exact path="/checkout" component={Checkout} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;