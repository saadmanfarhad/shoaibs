import React from 'react';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm';

const Checkout = (props) => {
  const { onCheckoutSubmit } = props;
  return (
    <>
      <CheckoutForm onCheckoutSubmit={onCheckoutSubmit} />
      <Cart showButton={true}/>
    </>
  );
};

export default Checkout;
