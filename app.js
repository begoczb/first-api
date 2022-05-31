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
