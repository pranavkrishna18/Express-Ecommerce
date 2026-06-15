const products = require("../models/product.model");

function createProduct(productData) {
  const newProduct = {
    id: products.length + 1,
    ...productData,
  };

  products.push(newProduct);

  return newProduct;
}

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

function updateProduct(id, data) {
  const product = products.find((product) => product.id === Number(id));

  if (!product) return null;

  Object.assign(product, data);

  return product;
}

function deleteProduct(id) {
  const index = products.findIndex((product) => product.id === Number(id));

  if (index === -1) return null;

  return products.splice(index, 1)[0];
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
