import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CheckoutField from './CheckoutField';
import validateEmail from '../../utils/validateEmail';
import formFields from './formFields';

const CheckoutForm = props => {
  // const { handleSubmit } = props;

  return (
    <main className="pa4 black-80">
      <form className="measure center">
        <fieldset id="order" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Customer Details</legend>
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
        <div className="">
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

const validate = values => {
  const errors = {};

  errors.email = validateEmail(values.email || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}!`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'checkoutForm',
  destroyOnUnmount: false
})(CheckoutForm);
