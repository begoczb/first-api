const router = require("express").Router();
const User = require("../models/User.model.js");
const isAuthenticated = require("../middleware/isAuthenticated");

router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const { username, contact } = req.body;

    const createdUser = await User.create({
      username,
      contact,
    });
    res.status(201).json(createdUser);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
