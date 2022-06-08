const { Schema, SchemaTypes, model } = require("mongoose");

const bookRentalSchema = new Schema({
  user: { type: SchemaTypes.ObjectId, ref: "User" },
  book: { type: SchemaTypes.ObjectId, ref: "Book" },
  startDate: SchemaTypes.Date,
  endDate: SchemaTypes.Date,
});

const BookRental = model("BookRental", bookRentalSchema);

module.exports = BookRental;
