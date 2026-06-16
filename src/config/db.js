const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB() {
  try {
    await client.connect();

    db = client.db(process.env.DB_NAME);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Database Connection Error", error.message);

    process.exit(1);
  }
}

function getDB() {
  return db;
}

module.exports = {
  connectDB,
  getDB,
};
