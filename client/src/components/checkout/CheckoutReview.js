import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import formFields from './formFields';
import Cart from './Cart';
import * as actions from '../../actions';

const CheckoutReview = ({ onCancel, history }) => {
  const { values } = useSelector(state => state.form.checkoutForm);
  const checkout = useSelector(state => state.checkout);
  const dispatch = useDispatch();

  const placeOrder = () => {
    const order = {
      ...values,
      order: checkout,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    dispatch(actions.placeOrder(order, history));
  }

  return (
    <main className="black-70">
      <div className="measure center">
        <header className="tc ph4">
          <h1 className="f3 f2-m f1-l fw2 black-70 mv3">Order Details</h1>
        </header>

        <dl className="lh-title mt0 center">
          {formFields.map(({ name, label }) => (
            <div key={name}>
              <dt className="ml3-ns ml4 ml3-m ml3-l f6 b">{label}</dt>
              <dd className="ml3-ns ml4 ml3-m ml3-l">{values[name]}</dd>
            </div>
          ))}
        </dl>
        <Cart showButton={false} />
        <div className="flex items-center justify-between pa4">
          <button
            onClick={onCancel}
          >
            Back
          </button>
          <button onClick={() => placeOrder()}>
            Confirm Order
          </button>
        </div>
      </div>
    </main>
  );
};

export default withRouter(CheckoutReview);
