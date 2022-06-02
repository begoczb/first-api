const Book = require("../models/Book.model.js");
const openConnection = require("../db/connect.js");

const mongoose = require("mongoose");

// const books = [
//   {
//     title: "The Caves of Steel",
//     author: "Isaac Asimov",
//     isbn: "0-553-29340-0",
//     year: 1954,
//     rating: 5,
//     genre: "Sci-Fi",
//     quote:
//       "There are degrees of justice, Elijah. When the lesser is incompatable with the greater, the lesser must give way.",
//     standalone: false,
//     series_number: 1,
//   },
// ];

//recover data

async function seedBooks() {
  await openConnection();
  const createdBooks = await Book.create(books);
  console.log(`Created ${createdBooks.length} books.`);
  await mongoose.connection.close();
  console.log("Connection closed.");
}

seedBooks();
