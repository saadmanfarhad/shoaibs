const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
  name: String,
  type: String,
  description: String,
  price: Number,
  img: String
});

mongoose.model('menus', menuSchema);
