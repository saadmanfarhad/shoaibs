import React from 'react';

const Footer = () => {
  return (
    <footer className="pv4 ph3 ph5-ns tc">
      <a
        className="link dim black-60 dib h2 w2 h3-ns w3-ns br-100 mr3 "
        href="https://www.facebook.com"
        title=""
      >
        <svg
          data-icon="facebook"
          viewBox="0 0 32 32"
          style={{ fill: 'currentColor' }}
        >
          <title>facebook icon</title>
          <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
        </svg>
      </a>
      {/*<div class="mt4">
        <a href="#" class="f6 link dim gray dib mr3 mr4-ns">
          Help
        </a>
      </div>*/}
    </footer>
  );
};

export default Footer;
