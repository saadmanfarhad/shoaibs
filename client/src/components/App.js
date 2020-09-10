import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Footer from './Footer';
import Home from './home/Home';
import CheckoutNew from './checkout/CheckoutNew';
import Order from './order/Order';
import Menu from './menu/Menu';
import ItemForm from './menu/ItemForm';
import Admin from './admin/Admin';
import ProtectedComponent from './ProtectedComponent';

library.add(faCheck, faLongArrowAltRight);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkout = JSON.parse(localStorage.getItem('checkout'));
    if (checkout) {
      dispatch(actions.updateCheckout(checkout));
    }
  }, [dispatch]);

  return (
    <div className="cover bg-left bg-center-l" style={{backgroundImage: `url(${require('../assets/main-bg.jpg')})`}}>
      <BrowserRouter>
        <div className="bg-black-10 min-vh-100">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/checkout" component={CheckoutNew} />
          <Switch>
            <ProtectedComponent exact path="/addOrEdit" component={ItemForm} />
            <ProtectedComponent exact path="/order" component={Order} />
            <ProtectedComponent exact path="/menu" component={Menu} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
