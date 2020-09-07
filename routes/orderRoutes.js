const mongoose = require('mongoose');
const Order = mongoose.model('orders');

module.exports = app => {
  app.post('/api/order', async (req, res) => {
    const { name, contactNumber, email, order, createdAt, updatedAt } = req.body;
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
};
