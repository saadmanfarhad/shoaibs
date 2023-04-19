import React from "react";
import { reduxForm, Field } from "redux-form";
import CheckoutField from "./CheckoutField";
import validateEmail from "../../utils/validateEmail";
import formFields from "./formFields";

const CheckoutForm = (props) => {
  const { handleSubmit } = props;

  return (
    <main className="pa4 black-80">
      <form
        className="measure center"
        onSubmit={handleSubmit(props.onCheckoutSubmit)}
      >
        <fieldset id="order" className="ba b--transparent ph0 mh0">
          <header className="tc ph4">
            <h1 className="f3 f2-m f1-l fw2 black-70 mv3">Customer Details</h1>
          </header>
          {formFields.map(({ name, label }) => (
            <Field
              key={name}
              label={label}
              type="text"
              name={name}
              component={CheckoutField}
            />
          ))}
        </fieldset>
        <div>
          <input
            className="b black-70 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </main>
  );
};

const validate = (values) => {
  const errors = {};

  errors.email = validateEmail(values.email || "");

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}!`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "checkoutForm",
  destroyOnUnmount: false,
  initialValues: {},
})(CheckoutForm);
