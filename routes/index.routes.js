const router = require("express").Router();

//GET

router.get("/", (req, res) => {
  res.json({
    message: "It works!!!",
  });
});

module.exports = router;
