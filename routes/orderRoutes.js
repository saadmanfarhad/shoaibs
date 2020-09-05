const mongoose = require('mongoose');
const Order = mongoose.model('orders');

module.exports = app => {
  app.post('/api/order', async (req, res) => {
    const { name, contactNumber, email, orders, createdAt } = req.body;
    const order = new Order({
      name,
      contactNumber,
      email,
      orders,
      createdAt
    });

    try {
      await order.save();
      res.send({ status: true });
    } catch (e) {
      res.status(422).send({ status: false, message: e });
    }
  });
};
