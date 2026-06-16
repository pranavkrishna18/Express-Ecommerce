const productService = require("../services/product.service");

async function createProduct(req, res) {
  const product = await productService.createProduct(req.body);

  res.status(201).json(product);
}

async function getAllProducts(req, res) {
  res.json(await productService.getAllProducts());
}

async function getProductById(req, res) {
  res.json(await productService.getProductById(req.params.id));
}

async function updateProduct(req, res) {
  res.json(await productService.updateProduct(req.params.id, req.body));
}

async function deleteProduct(req, res) {
  await productService.deleteProduct(req.params.id);

  res.json({
    message: "Product Deleted",
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
