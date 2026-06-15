const userService = require("../services/user.service");

function createUser(req, res) {
  const user = userService.createUser(req.body);

  res.status(201).json(user);
}

function getAllUsers(req, res) {
  const users = userService.getAllUsers();

  res.json(users);
}

function getUserById(req, res) {
  const user = userService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
}

function updateUser(req, res) {
  const user = userService.updateUser(req.params.id, req.body);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
}

function deleteUser(req, res) {
  const user = userService.deleteUser(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    message: "User deleted",
  });
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
