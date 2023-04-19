import React, { useState } from "react";
import { reduxForm } from "redux-form";
import Checkout from "./Checkout";
import CheckoutReview from "./CheckoutReview";

const CheckoutNew = () => {
  const [showFormReview, setShowFormReview] = useState(false);

  return (
    <div>
      {showFormReview ? (
        <CheckoutReview onCancel={() => setShowFormReview(false)} />
      ) : (
        <Checkout onCheckoutSubmit={() => setShowFormReview(true)} />
      )}
    </div>
  );
};

export default reduxForm({
  form: "checkoutForm",
  initialValues: {},
})(CheckoutNew);
