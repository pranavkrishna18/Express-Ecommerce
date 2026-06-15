const users = require("../models/user.model");

function createUser(userData) {
  const newUser = {
    id: users.length + 1,
    ...userData,
  };

  users.push(newUser);

  return newUser;
}

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === Number(id));
}

function updateUser(id, updatedData) {
  const user = users.find((user) => user.id === Number(id));

  if (!user) return null;

  Object.assign(user, updatedData);

  return user;
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id === Number(id));

  if (index === -1) return null;

  return users.splice(index, 1)[0];
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
