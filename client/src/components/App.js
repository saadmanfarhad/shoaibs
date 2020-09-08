import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Header from './Header';
import Footer from './Footer';
import Home from './home/Home';
import CheckoutNew from './checkout/CheckoutNew';
import Order from './order/Order';
import Menu from './menu/Menu';
import ItemForm from './menu/ItemForm';

library.add(faCheck);

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
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={CheckoutNew} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/addOrEdit" component={ItemForm} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;