import React from 'react';

const MenuItem = props => {
  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-50-l mw-100 center">
      <img
        src={props.menu.img}
        class="db w-100 br2 br--top"
        alt="of a kitten looking menacing."
      />
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <div class="dtc">
            <h1 class="f5 f4-ns mv0">{props.menu.name}</h1>
          </div>
          <div class="dtc tr">
            <h2 class="f5 mv0">${props.menu.price}</h2>
          </div>
        </div>
        <p class="f6 lh-copy measure mt2 mid-gray">
          {props.menu.description}
        </p>
      </div>
    </article>
  );
};

export default MenuItem;