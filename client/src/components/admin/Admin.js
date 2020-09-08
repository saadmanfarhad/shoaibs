import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import AdminField from './AdminField';
import formFields from './formFields';
import { adminLogin } from '../../actions';

const Admin = ({ handleSubmit, history }) => {
  const dispatch = useDispatch();
  const { values } = useSelector(state => state.form.adminForm);

  const login = () => {
    if (values) {
      dispatch(adminLogin(values, history));
    }
  };

  return (
    <main className="pa4 black-80">
      <form className="measure center" onSubmit={handleSubmit(login)}>
        <fieldset id="order" className="ba b--transparent ph0 mh0">
          <header className="tc ph4">
            <h1 className="f3 f2-m f1-l fw2 black-70 mv3">Sign In</h1>
          </header>
          {formFields.map(({ name, type, label }) => (
            <Field
              key={name}
              label={label}
              type={type}
              name={name}
              component={AdminField}
            />
          ))}
        </fieldset>
        <div>
          <input
            className="b black-70 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Sign In"
          />
        </div>
      </form>
    </main>
  );
};

const validate = values => {
  const errors = {};

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}!`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'adminForm',
  destroyOnUnmount: true
})(withRouter(Admin));
