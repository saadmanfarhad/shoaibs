import React, { useState } from 'react';

const HomeItem = props => {
  const [quantity, setQuantity] = useState(0);

  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-50-l mw-100 center">
      <img
        src={props.menu.img}
        className="db w-100 br2 br--top"
        alt={props.menu.name}
      />
      <div className="bg-white-50 pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{props.menu.name}</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">${props.menu.price}</h2>
          </div>
        </div>
        <p className="f6 f5-ns lh-copy measure mt2 mid-gray">
          {props.menu.description}
        </p>
        <div className="dt w-100">
          <div className="dtc w-25">
            <h1 className="f6 f6-ns mv0">Quantity: </h1>
          </div>
          <div className="dtc w-25 tc">
            <input
              className="w-50"
              type="number"
              name="quantity"
              value={quantity}
              min={0}
              onChange={e => setQuantity(e.target.value)}
              step="1"
            />
          </div>
          <div className="dtc w-50 tc">
            <button
              onClick={() => {
                props.addItem({
                  name: props.menu.name,
                  quantity: parseInt(quantity),
                  id: props.menu._id,
                  price: props.menu.price
                });
                setQuantity(0);
              }}
              disabled={quantity > 0 ? false : true}
              className="w-50">
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomeItem;
