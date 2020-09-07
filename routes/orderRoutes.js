const mongoose = require('mongoose');
const Order = mongoose.model('orders');
const requireLogin = require('../middlewares/requireLogin');
const jwt = require('express-jwt');
const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/order', async (req, res) => {
    const {
      name,
      contactNumber,
      email,
      order,
      createdAt,
      updatedAt
    } = req.body;
    const minifiedOrder = order.map(or => {
      return {
        item: or.id,
        quantity: or.quantity
      };
    });

    const orderDetails = new Order({
      name,
      contactNumber,
      email,
      order: minifiedOrder,
      createdAt,
      updatedAt
    });

    try {
      await orderDetails.save();
      res.send({ status: true });
    } catch (e) {
      res.status(422).send({ status: false, message: e });
    }
  });

  app.get('/api/order', async (req, res) => {
    try {
      const orders = await Order.find({});
      res.send(orders);
    } catch (e) {
      res.status(422).send({ status: false, message: e });
    }
  });
};
