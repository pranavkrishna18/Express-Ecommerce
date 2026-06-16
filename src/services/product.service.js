const productModel = require("../models/product.model");

async function createProduct(data) {
  const result = await productModel.createProduct(data);

  return {
    _id: result.insertedId,
    ...data,
  };
}

async function getAllProducts() {
  return await productModel.getAllProducts();
}

async function getProductById(id) {
  return await productModel.getProductById(id);
}

async function updateProduct(id, data) {
  await productModel.updateProduct(id, data);

  return await productModel.getProductById(id);
}

async function deleteProduct(id) {
  return await productModel.deleteProduct(id);
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
