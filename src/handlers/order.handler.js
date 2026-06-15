const orderService = require("../services/order.service");

function createOrder(req, res) {
  const { userId, productId, quantity } = req.body;

  const order = orderService.createOrder(userId, productId, quantity);

  if (order.error) {
    return res.status(400).json({
      message: order.error,
    });
  }

  res.status(201).json(order);
}

function getAllOrders(req, res) {
  const orders = orderService.getAllOrders();

  res.json(orders);
}

module.exports = {
  createOrder,
  getAllOrders,
};
