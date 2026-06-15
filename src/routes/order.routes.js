const express = require("express");

const router = express.Router();

const orderHandler = require("../handlers/order.handler");

router.post("/", orderHandler.createOrder);

router.get("/", orderHandler.getAllOrders);

module.exports = router;
