import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

const OrderItem = props => {
  const bill = props.order.order.reduce((initial, or) => {
    return (initial = initial + or.quantity * or.item.price);
  }, 0);

  const items = props.order.order.reduce((initial, or, idx) => {
    return idx === props.order.order.length - 1
      ? (initial += `${or.item.name} x${or.quantity}`)
      : `${or.item.name} x${or.quantity}, `;
  }, '');

  return (
    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <div className="pl3 flex-auto">
        <span className="f5 db black-70">Name: {props.order.name}</span>
        <span className="f5 db black-70">
          Contact: {props.order.contactNumber}
        </span>
        <span className="f5 db black-70">Email: {props.order.email}</span>
        <span className="f5 db black-70">Items: {items}</span>
        <span className="f5 db black-70">Bill: {bill}</span>
        <span className="f5 db black-70">
          Status:{' '}
          {props.order.status ? (
            <span className="green">Completed</span>
          ) : (
            <span className="red">Not Completed</span>
          )}
        </span>
        <span className="f5 db black-70">
          Created At: {moment(props.order.createdAt).format('DD/MM/YY hh:mm a')}
        </span>
        <span className="f5 db black-70">
          Updated At: {moment(props.order.updatedAt).format('DD/MM/YY hh:mm a')}
        </span>
      </div>
      {!props.order.status ? (
        <div className="flex">
          <FontAwesomeIcon
            onClick={() => props.update(props.order)}
            className="hover-blue pointer"
            icon="check"
          />
        </div>
      ) : (
        undefined
      )}
    </li>
  );
};

export default OrderItem;
