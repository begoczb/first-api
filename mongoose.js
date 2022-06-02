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

const MONGO_URI = "mongodb://localhost:27017/webdev-905";

function createBook() {
  return Book.create({
    title: "The Caves of Steel",
    author: "Isaac Asimov",
    isbn: "0-553-29340-0",
    year: 1954,
    rating: 5,
    genre: "Sci-Fi",
    quote:
      "There are degrees of justice, Elijah. When the lesser is incompatable with the greater, the lesser must give way.",
    standalone: false,
    series_number: 1,
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
  await mongoose.connection.close();
}

executeDatabaseThings();
