const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: mongoose.SchemaTypes.String, required: true },
  author: { type: mongoose.SchemaTypes.String, required: true },
  isbn: { type: mongoose.SchemaTypes.String, required: true },
  year: mongoose.SchemaTypes.Number,
  rating: mongoose.SchemaTypes.Number,
  genre: mongoose.SchemaTypes.String,
  quote: mongoose.SchemaTypes.String,
  standalone: { type: mongoose.SchemaTypes.Boolean, required: true },
  series_number: mongoose.SchemaTypes.Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
