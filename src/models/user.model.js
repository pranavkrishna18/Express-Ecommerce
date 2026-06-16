const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

function collection() {
  return getDB().collection("users");
}

async function createUser(data) {
  return await collection().insertOne(data);
}

async function getAllUsers() {
  return await collection().find().toArray();
}

async function getUserById(id) {
  return await collection().findOne({
    _id: new ObjectId(id),
  });
}

async function updateUser(id, data) {
  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: data },
  );
}

async function deleteUser(id) {
  return await collection().deleteOne({
    _id: new ObjectId(id),
  });
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
