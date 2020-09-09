const mongoose = require('mongoose');
const Admin = mongoose.model('admins');
const bcrypt = require('bcrypt');
const requireLogin = require('../middlewares/requireLogin');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/adminlogin', async (req, res) => {
    const { username, password } = req.body;

    try {
      const admin = await Admin.findOne({ username: username });

      if (admin === null || admin.length === 0) {
        return res
          .status(404)
          .send({ status: false, message: 'Admin not found' });
      }

      if (bcrypt.compareSync(password, admin.hashedPassword)) {
        const token = jsonwebtoken.sign(
          { id: admin._id, username: admin.username },
          keys.secret,
          { expiresIn: 129600 }
        ); // Sigining the token

        res.cookie('token', token, { httpOnly: true, maxAge: 10 * 60 * 1000 });
        res.send({ status: true, message: token });
      } else {
        return res.status(401).send({
          status: false,
          message: 'Username or password is incorrect'
        });
      }
    } catch (e) {
      res.status(422).send({ status: false, message: e });
    }
  });

  app.get('/api/me', requireLogin, (req, res) => {
    res.send({ status: true, user: req.user });
  });
};
