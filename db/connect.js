const { default: mongoose } = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/webdev-905";

async function openConnection() {
  const db = await mongoose.connect(MONGO_URI);
  console.log(`Connected to ${db.connection.name}`);
}

module.exports = openConnection;
