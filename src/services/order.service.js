const productModel = require("../models/product.model");

const userModel = require("../models/user.model");

const orderModel = require("../models/order.model");

async function createOrder(userId, productId, quantity) {
  const user = await userModel.getUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const product = await productModel.getProductById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  if (product.stock < quantity) {
    throw new Error("Insufficient Stock");
  }

  await productModel.updateProduct(productId, {
    stock: product.stock - quantity,
  });

  const order = {
    userId,

    userName: user.name,

    productId,

    productName: product.name,

    quantity,

    price: product.price,

    totalPrice: quantity * product.price,

    orderedAt: new Date(),
  };

  const result = await orderModel.createOrder(order);

  return {
    _id: result.insertedId,
    ...order,
  };
}

async function getAllOrders() {
  return await orderModel.getAllOrders();
}

module.exports = {
  createOrder,
  getAllOrders,
};
