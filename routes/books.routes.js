const Book = require("../models/Book.model");

const router = require("express").Router();

//TEST
// const books = [
//   {
//     title: "book1",
//     author: "author1",
//     isbn: 0000,
//     year: 1994,
//     rating: 5,
//     quote: "some quote",
//   },
//   {
//     title: "book2",
//     author: "author2",
//     isbn: 0000,
//     year: 1994,
//     rating: 5,
//     quote: "some quote",
//   },
// ];

//GET ALL BOOKS
router.get("/", async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//GET BOOK MATCHING TITLE
function addRouteForKey(key) {
  router.get(`/${key}/:${key}`, (req, res, next) => {
    const value = req.params[key];
    const book = books.find((element) => element[key] === value);

    //add if !book
    if (!book) {
      next();
      return;
    }

    res.json(book);
  });
}
addRouteForKey("title");
addRouteForKey("author");
addRouteForKey("year");
addRouteForKey("isbn");
addRouteForKey("year");
addRouteForKey("rating");

router.get("/:id", async (req, res, next) => {
  try {
    const bookDetails = await Book.findById(req.params.id);
    res.status(200).json(bookDetails);
  } catch (err) {
    console.error(err);
    next();
  }
});
// addRouteForKey("quote");

router.post("/", (req, res) => {
  const book = req.body;

  if (!book.title || typeof book.title !== "string") {
    res.status(400).json({
      message: "Book title not provided",
    });
    return;
  }

  if (!book.author || typeof book.author !== "string") {
    res.status(400).json({
      message: `Author is not valid`,
    });
    return;
  }
  //isbn 10 digits <jan 2007 && 13 digits > jan 2007
  if (
    !book.isbn ||
    typeof book.isbn !== "string" ||
    (book.year < 2007 && book.isbn.length !== 10) ||
    (book.year >= 2007 && book.isbn.length !== 13)
  ) {
    res.status(400).json({
      message: `Isbn is not valid`,
    });
    return;
  }

  //4 digit length 1966 (isbn was implemented)
  if (
    !book.year ||
    typeof book.year !== "number" ||
    book.year.length < 4 ||
    book.year.length > 5
  ) {
    res.status(400).json({
      message: `Year is not valid`,
    });
    return;
  }
  // >= 0 <= 5
  if (
    !book.rating ||
    typeof book.rating !== "number" ||
    (book.rating >= 0 && book.rating <= 5)
  ) {
    res.status(400).json({
      message: `Rating is not valid`,
    });
    return;
  }

  if (!book.quote || typeof book.quote !== "string") {
    res.status(400).json({
      message: `Quote is not valid`,
    });
    return;
  }

  books.push(req.body);

  res.status(201).json({
    message: "message received!",
    body: req.body,
  });
});

module.exports = router;
