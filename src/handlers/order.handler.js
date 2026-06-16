const orderService = require("../services/order.service");

async function createOrder(req, res) {
  try {
    const { userId, productId, quantity } = req.body;

    const order = await orderService.createOrder(userId, productId, quantity);

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}

async function getAllOrders(req, res) {
  const orders = await orderService.getAllOrders();

  res.json(orders);
}

module.exports = {
  createOrder,
  getAllOrders,
};
