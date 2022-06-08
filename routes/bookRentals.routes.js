const router = require("express").Router();
const BookRental = require("../models/BookRental.model.js");

router.get("/", async (req, res, next) => {
  try {
    const bookRentals = await BookRental.find().populate("user book");

    res.status(200).json(bookRentals);
  } catch (err) {
    console.error(err);
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { username, book, startDate, endDate } = req.body;

    const createdRental = await BookRental.create({
      username,
      book,
      startDate,
      endDate,
    });
    res.status(201).json(createdRental);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
