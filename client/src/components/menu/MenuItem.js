import React from 'react';
import { useHistory } from 'react-router-dom';

const MenuItem = (props) => {
  let history = useHistory();

  const goToAddOrEdit = () => {
    localStorage.setItem('item', JSON.stringify(props.item));
    history.push('/addOrEdit');
  }

  return (
    <article>
      <div onClick={() => goToAddOrEdit()} className="link pointer dt w-100 bb b--black-10 pb2 mt2 dim blue">
        <div className="dtc w4">
          <img
            src={props.item.img}
            alt={props.item.name}
            className="db w-100"
          />
        </div>
        <div className="dtc v-top pl2">
          <h1 className="f6 f4-ns fw6 lh-title black mv0">{props.item.name}</h1>
          <h2 className="f6 fw4 mt2 mb0 black-60">{props.item.description}</h2>
          <dl className="mt2 f6">
            <dt className="clip">Price</dt>
            <dd className="ml0">${props.item.price}</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}

export default MenuItem;