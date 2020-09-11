import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const orderLength = useSelector(state => state.checkout.length);

  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <a
        className="db f3 f2-ns dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
        href="/"
        title="Home"
      >
        Shoaib's
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a
          className="link dim dark-gray dib"
          href="/checkout"
          title="Contact"
        >
          <FontAwesomeIcon
            className="f3 f2-ns mr1 mb1"
            icon="shopping-cart"
          />
          {orderLength}
        </a>
      </div>
    </nav>
  );
};

export default Header;
