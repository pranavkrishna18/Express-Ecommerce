const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

function collection() {
  return getDB().collection("products");
}

async function createProduct(data) {
  return await collection().insertOne(data);
}

async function getAllProducts() {
  return await collection().find().toArray();
}

async function getProductById(id) {
  return await collection().findOne({
    _id: new ObjectId(id),
  });
}

async function updateProduct(id, data) {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: data },
  );
}

async function deleteProduct(id) {
  return await collection().deleteOne({
    _id: new ObjectId(id),
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
