const mongoose = require('mongoose');
const Menu = mongoose.model('menus');

module.exports = app => {
  app.get('/api/menu', async (req, res) => {
    try {
      const menu = await Menu.find({ });
      res.send(menu);
    } catch (e) {
      res.status(422).send({ status: false, message: e });
    }
  });

  app.put('/api/menu', async (req, res) => {
    try {
      const {
        id,
        name,
        price,
        description,
        img,
        updatedAt
      } = req.body;

      const menuItemToUpdate = {
        id,
        name,
        price: parseInt(price),
        description,
        img,
        updatedAt: new Date()
      };

      const updatedMenuItem = await Menu.findOneAndUpdate(
        { _id: menuItemToUpdate.id },
        menuItemToUpdate,
        { new: true }
      );

      res.send({ status: true, message: updatedMenuItem });
    } catch (e) {
      res.status(422).send({ status: false, message: e });
    }
  });
};