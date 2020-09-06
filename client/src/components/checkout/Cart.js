import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearCheckout as clearCart } from '../../actions';

const Cart = (props) => {
  const dispatch = useDispatch();
  const checkout = useSelector(state => state.checkout);
  const totalAmount = checkout.reduce((initial, ck) => {
    return (initial = initial + ck.quantity * ck.price);
  }, 0);

  const clearCheckout = () => {
    dispatch(clearCart());
  };

  return checkout.length ? (
    <>
      <header className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-70 mv3">Cart</h1>
      </header>
      <ul className="list pl0 mt0 measure center">
        {checkout.map(ck => (
          <CartItem key={ck.id} item={ck} />
        ))}
        <div className="flex items-center justify-between lh-copy pa3 ph0-l b--black-10">
          <div className="pl3">
            <span className="f6 db black-70">Total: </span>
          </div>
          <div>
            <p className="f6 blue hover-dark-gray">{totalAmount}</p>
          </div>
        </div>
        {props.showButton ?
          <button
            onClick={() => clearCheckout()}
            className="pa2 fr mr2 mr0-ns mr0-l mr0-m"
          >
            Clear Cart
          </button>
          : undefined
        }
      </ul>
    </>
  ) : (
    <p>Nothing in cart</p>
  );
};

export default Cart;
