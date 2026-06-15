const productService = require("../services/product.service");

function createProduct(req, res) {
  const product = productService.createProduct(req.body);

  res.status(201).json(product);
}

function getAllProducts(req, res) {
  const products = productService.getAllProducts();

  res.json(products);
}

function getProductById(req, res) {
  const product = productService.getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
}

function updateProduct(req, res) {
  const product = productService.updateProduct(req.params.id, req.body);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
}

function deleteProduct(req, res) {
  const product = productService.deleteProduct(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json({
    message: "Product deleted",
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
