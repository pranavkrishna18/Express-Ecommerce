const orders = require("../models/order.model");

const users = require("../models/user.model");

const products = require("../models/product.model");

function createOrder(userId, productId, quantity) {
  const user = users.find((user) => user.id === Number(userId));

  if (!user) {
    return {
      error: "User not found",
    };
  }

  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return {
      error: "Product not found",
    };
  }

  if (product.stock < quantity) {
    return {
      error: "Insufficient stock",
    };
  }

  product.stock -= quantity;

  const order = {
    id: orders.length + 1,

    userId: user.id,

    productId: product.id,

    productName: product.name,

    quantity,

    totalPrice: quantity * product.price,
  };

  orders.push(order);

  return order;
}

function getAllOrders() {
  return orders;
}

module.exports = {
  createOrder,
  getAllOrders,
};
