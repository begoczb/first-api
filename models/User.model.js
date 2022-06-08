const { Schema, SchemaTypes, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  contact: String,
});

const User = model("User", userSchema);

module.exports = User;
