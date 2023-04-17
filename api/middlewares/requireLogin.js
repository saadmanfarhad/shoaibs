const jsonwebtoken = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = (req, res, next) => {
  req.user = null;

  function clearTokenAndNext() {
    res.clearCookie("token");
    return res
      .status(401)
      .send({ status: false, message: "You must be signed in!" });
  }

  const { token } = req.cookies;
  if (!token) {
    return clearTokenAndNext();
  }

  jsonwebtoken.verify(token, keys.secret, (err, decodedToken) => {
    if (err) {
      return clearTokenAndNext();
    }

    if (decodedToken.exp <= Date.now() / 1000) {
      return clearTokenAndNext();
    }

    const { id } = decodedToken;

    if (id) {
      req.user = id;
      next();
    }

    if (!req.user) {
      clearTokenAndNext();
    }
  });
};
