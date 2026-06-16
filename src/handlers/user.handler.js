const userService = require("../services/user.service");

async function createUser(req, res) {
  const user = await userService.createUser(req.body);

  res.status(201).json(user);
}

async function getAllUsers(req, res) {
  const users = await userService.getAllUsers();

  res.json(users);
}

async function getUserById(req, res) {
  const user = await userService.getUserById(req.params.id);

  res.json(user);
}

async function updateUser(req, res) {
  const user = await userService.updateUser(req.params.id, req.body);

  res.json(user);
}

async function deleteUser(req, res) {
  await userService.deleteUser(req.params.id);

  res.json({
    message: "User Deleted",
  });
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
