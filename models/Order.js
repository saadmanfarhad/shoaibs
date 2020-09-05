const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  name: String,
  contactNumber: String,
  email: String,
  orders: [
    {
      item: { type: Schema.Types.ObjectId, ref: 'Menu' },
      quantity: Number
    }
  ],
  createdAt: Date
});

module.exports = orderSchema;
