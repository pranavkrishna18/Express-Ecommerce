const router = require("express").Router();

const handler = require("../handlers/order.handler");

router.post("/", handler.createOrder);
router.get("/", handler.getAllOrders);

module.exports = router;
