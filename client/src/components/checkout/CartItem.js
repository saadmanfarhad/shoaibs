import React from 'react';

const CartItem = props => {
  const amount = props.item.quantity * props.item.price;

  return (
    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <div className="pl3 flex-auto">
        <span className="f6 db black-70">{props.item.name}</span>
        <span className="f6 db black-70">x{props.item.quantity}</span>
      </div>
      <div>
        <p className="f6 blue hover-dark-gray">
          {amount}
        </p>
      </div>
    </li>
  );
};

export default CartItem;
