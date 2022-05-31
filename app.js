const express = require("express");

const app = express();
const port = 3000;

//use a json parser
app.use(express.json());

const indexRouter = require("./routes/index.routes.js");
console.log(indexRouter);
app.use("/", indexRouter);

const booksRouter = require("./routes/books.routes.js");
app.use("/books", booksRouter);

// app.get("/echo", (req, res) => {
//   res.json({
//     url: req.originalUrl,
//     queryString: req.query,
//     time: new Date(),
//     message: "general kenobi",
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
