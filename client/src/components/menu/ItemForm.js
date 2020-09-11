import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { reduxForm, Field, change } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateMenu, addMenu, deleteMenu } from '../../actions';
import ItemField from './ItemField';
import formFields from './formFields';

const ItemForm = ({ handleSubmit, history }) => {
  const dispatch = useDispatch();
  const { values } = useSelector(state => state.form.itemForm);
  const [img, setImg] = useState(undefined);

  const addOrUpdate = async () => {
    if (values.image) {
      const file = values.image[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);

      try {
        const res = await axios.post(
          'https://api.Cloudinary.com/v1_1/hatch-limited/image/upload',
          formData
        );

        if (values.id) {
          const updatedValues = {
            ...values,
            img: res.data.secure_url
          };
          dispatch(updateMenu(updatedValues, history));
        } else {
          const updatedValues = {
            ...values,
            img: res.data.secure_url
          };
          dispatch(addMenu(updatedValues, history));
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      if (values.id) {
        dispatch(updateMenu(values, history));
      } else {
        alert('No image selected!');
      }
    }
  };

  useEffect(() => {
    const menuItem = JSON.parse(localStorage.getItem('item'));
    if (menuItem) {
      dispatch(change('itemForm', 'name', menuItem.name));
      dispatch(change('itemForm', 'description', menuItem.description));
      dispatch(change('itemForm', 'price', menuItem.price));
      dispatch(change('itemForm', 'id', menuItem._id));
      dispatch(change('itemForm', 'img', menuItem.img));
      setImg(menuItem.img);
    }
  }, [dispatch]);

  return (
    <main className="pa4 black-80">
      <form className="measure center" onSubmit={handleSubmit(addOrUpdate)}>
        <fieldset id="order" className="ba b--transparent ph0 mh0">
          <header className="tc ph4">
            <h1 className="f3 f2-m f1-l fw2 black-70 mv3">Item Details</h1>
          </header>
          {img ? (
            <div className="center w5">
              <img src={img} alt={img} className="db w-100" />
            </div>
          ) : (
            undefined
          )}
          {formFields.map(({ name, label, type }) => (
            <Field
              key={name}
              label={label}
              type={type}
              name={name}
              component={ItemField}
            />
          ))}
        </fieldset>
        <div className="flex justify-between">
          <input
            className="b green ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Save"
          />
          {img ? (
            <input
              className="b red ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick={() => dispatch(deleteMenu(values.id, history))}
              type="button"
              value="Delete"
            />
          ) : (
            undefined
          )}
        </div>
      </form>
    </main>
  );
};

const validate = values => {
  const errors = {};
  formFields.forEach(({ name }) => {
    if (!values[name] && name !== 'image') {
      errors[name] = `You must provide a ${name}!`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'itemForm',
  destroyOnUnmount: true
})(withRouter(ItemForm));
