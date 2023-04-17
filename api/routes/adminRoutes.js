const mongoose = require('mongoose');
const Admin = mongoose.model('admins');
const bcrypt = require('bcrypt');

module.exports = app => {
  app.post('/api/createAdmin', async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newAdmin = new Admin({
      name: req.body.name,
      username: req.body.username,
      hashedPassword: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    try {
      await newAdmin.save();
      res.send({ status: true });
    } catch (e) {
      res.status(422).send({ status: false, message: e });
    }
  });
};
