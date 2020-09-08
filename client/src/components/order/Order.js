import React, { useEffect } from 'react';
import OrderItem from './OrderItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrder, updateOrder } from '../../actions';

const Order = props => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);

  const update = (orderToUpdate) => {
    const updatedOrder = {
      ...orderToUpdate,
      status: !orderToUpdate.status,
      updatedAt: new Date()
    }

    dispatch(updateOrder(updatedOrder));
  }

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch])

  return order.length ? (
    <>
      <header className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-70 mv3">Orders</h1>
      </header>
      <ul className="list pl0 mt0 measure center">
        {order.map(or => (
          <OrderItem key={or._id} order={or} update={update}/>
        ))}
      </ul>
    </>
  ) : (
    <p>No orders</p>
  );
};

export default Order;
