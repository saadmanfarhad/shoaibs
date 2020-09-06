const mongoose = require('mongoose');
const Menu = mongoose.model('menus');

module.exports = app => {
  app.get('/api/menu', async (req, res) => {
    const menu = await Menu.find({ });
    res.send(menu);
  });
};