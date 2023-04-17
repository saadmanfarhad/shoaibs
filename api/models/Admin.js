const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  name: String,
  username: { type: String, uniq: true, required: true },
  hashedPassword: String,
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('admins', adminSchema);
