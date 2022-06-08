const Book = require("../models/Book.model.js");
const openConnection = require("../db/connect.js");

const mongoose = require("mongoose");

const rawBooks = require("../books.json");

async function seedBooks() {
  await openConnection();

  const createdBooks = await Book.create(rawBooks);
  console.log(`Created ${createdBooks.length} books.`);
  await mongoose.connection.close();
  console.log("Connection closed.");
}

seedBooks();
