import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const orderLength = useSelector(state => state.order);
  console.log(orderLength);

  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <a
        className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
        href="/"
        title="Home"
      >
        Shoaib's
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a className="link dim dark-gray f6 f5-l dib" href="/cart" title="Contact">
          <img
            src={require("../assets/shopping-cart.svg")}
            className="dib w3 h2 br-100"
            alt="cart"
          />
          {orderLength.length}
        </a>
      </div>
    </nav>
  );
};

export default Header;
