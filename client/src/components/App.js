import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Menu from './menu/Menu';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Menu} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;