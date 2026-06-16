const userModel = require("../models/user.model");

async function createUser(data) {
  const result = await userModel.createUser(data);

  return {
    _id: result.insertedId,
    ...data,
  };
}

async function getAllUsers() {
  return await userModel.getAllUsers();
}

async function getUserById(id) {
  return await userModel.getUserById(id);
}

async function updateUser(id, data) {
  await userModel.updateUser(id, data);

  return await userModel.getUserById(id);
}

async function deleteUser(id) {
  return await userModel.deleteUser(id);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
