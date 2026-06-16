const router = require("express").Router();

const handler = require("../handlers/product.handler");

router.post("/", handler.createProduct);
router.get("/", handler.getAllProducts);
router.get("/:id", handler.getProductById);
router.put("/:id", handler.updateProduct);
router.delete("/:id", handler.deleteProduct);

module.exports = router;
