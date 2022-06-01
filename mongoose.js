const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: mongoose.SchemaTypes.String, required: true },
  author: { type: mongoose.SchemaTypes.String, required: true },
  isbn: { type: mongoose.SchemaTypes.String, required: true },
  year: mongoose.SchemaTypes.Number,
  rating: mongoose.SchemaTypes.Number,
  genre: mongoose.SchemaTypes.String,
  quote: mongoose.SchemaTypes.String,
  standalone: mongoose.SchemaTypes.Boolean,
});

const Book = mongoose.model("Book", bookSchema);

const MONGO_URI = "mongodb://localhost:27017/webdev-905";

function createBook() {
  return Book.create({
    title: "Child of the Prophecy",
    author: "Juliet Marillier",
    isbn: "978-0-7329-1093-8",
    year: 2001,
    rating: 5,
    genre: "",
  });
}

async function executeDatabaseThings() {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(
      `Connected to Mongo! Database name: "${connection.connections[0].name}"`
    );
  } catch (err) {
    console.error(`Error connecting to mongo: ${MONGO_URI}.`, err);
    return;
  }
  await createBook();

  const books = await Book.find();
  console.log(books);
  return mongoose.connection.close();
}

executeDatabaseThings();
