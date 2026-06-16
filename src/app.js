const express = require("express");

const app = express();

app.use(express.json());

app.use("/users", require("./routes/user.routes"));

app.use("/products", require("./routes/product.routes"));

app.use("/orders", require("./routes/order.routes"));

module.exports = app;
