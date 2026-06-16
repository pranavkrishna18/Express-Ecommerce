const router = require("express").Router();

const handler = require("../handlers/user.handler");

router.post("/", handler.createUser);
router.get("/", handler.getAllUsers);
router.get("/:id", handler.getUserById);
router.put("/:id", handler.updateUser);
router.delete("/:id", handler.deleteUser);

module.exports = router;
