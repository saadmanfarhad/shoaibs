import React, { useEffect } from 'react';
import OrderItem from './OrderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrder, updateOrder } from '../../actions';

const Order = props => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);

  const update = orderToUpdate => {
    const updatedOrder = {
      _id: orderToUpdate._id,
      status: !orderToUpdate.status,
      updatedAt: new Date()
    };

    dispatch(updateOrder(updatedOrder));
  };

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  return (
    <main className="mw7 center">
      <a className="black-70 hover-blue link mb2" href="/menu">
        <FontAwesomeIcon className="mr1" icon="long-arrow-alt-right" />
        Menu
      </a>
      {order ? (
        <>
          <header className="tc ph4">
            <h1 className="f3 f2-m f1-l fw2 black-70 mv3">Orders</h1>
          </header>
          <ul className="list pl0 mt0 measure center">
            {order.map(or => (
              <OrderItem key={or._id} order={or} update={update} />
            ))}
          </ul>
        </>
      ) : (
        <p>No orders</p>
      )}
    </main>
  );
};

export default Order;
