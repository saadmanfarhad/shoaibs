const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");

require("./models/Menu");
require("./models/Order");
require("./models/Admin");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.disable("x-powered-by");

require("./routes/menuRoutes")(app);
require("./routes/orderRoutes")(app);
require("./routes/authenticationRoutes")(app);
// require('./routes/adminRoutes')(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
