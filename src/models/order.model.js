const { getDB } = require("../config/db");

function collection() {
  return getDB().collection("orders");
}

async function createOrder(data) {
  return await collection().insertOne(data);
}

async function getAllOrders() {
  return await collection().find().toArray();
}

module.exports = {
  createOrder,
  getAllOrders,
};
