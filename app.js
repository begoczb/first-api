const express = require("express");

const app = express();
const port = 3000;

//use a json parser
app.use(express.json());

//index router
const indexRouter = require("./routes/index.routes.js");
console.log(indexRouter);
app.use("/", indexRouter);

//books router
const booksRouter = require("./routes/books.routes.js");
app.use("/books", booksRouter);

//error Handling
const errorHandling = require("./error-handling.js");
errorHandling(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// import models
const { default: mongoose } = require("mongoose");
const openConnection = require("./db/connect.js");
const Book = require("./models/Book.model.js");

// connect to database
(async function () {
  await openConnection();
  try {
    const createdBook = await Book.create({
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
    console.log(createdBook);
  } catch (error) {
    console.log(error.message);
  }
  await mongoose.connection.close();
})();
