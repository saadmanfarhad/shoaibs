import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Menu from './menu/Menu';
import CheckoutNew from './checkout/CheckoutNew';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkout = JSON.parse(localStorage.getItem('checkout'));
    if (checkout) {
      dispatch(actions.updateCheckout(checkout));
    }
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Menu} />
          <Route exact path="/checkout" component={CheckoutNew} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;