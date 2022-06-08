const express = require("express");

const app = express();
const port = 3000;

require("dotenv/config");

require("./db/connect.js")();

//use a json parser
app.use(express.json());

//index router
app.use("/", require("./routes/index.routes.js"));

//books router
app.use("/books", require("./routes/books.routes.js"));

app.use("/users", require("./routes/users.routes.js"));
app.use("/book-rentals", require("./routes/bookRentals.routes.js"));
app.use("/auth", require("./routes/auth.routes.js"));

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

// (async function () {
//   await openConnection();
//   // try {
//   //   const createdBook = await Book.create({
//   //     title: "The Caves of Steel",
//   //     author: "Isaac Asimov",
//   //     isbn: "0-553-29340-0",
//   //     year: 1954,
//   //     rating: 5,
//   //     genre: "Sci-Fi",
//   //     quote:
//   //       "There are degrees of justice, Elijah. When the lesser is incompatable with the greater, the lesser must give way.",
//   //     standalone: false,
//   //     series_number: 1,
//   //   });
//   //   console.log(createdBook);
//   // } catch (error) {
//   //   console.log(error.message);
//   // }
//   await mongoose.connection.close();
// })();
