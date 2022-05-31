function errorHandling(app) {
  //route does not exist
  app.use((req, res, next) => {
    res.status(404).json({
      message: `Route not found: ${req.originalUrl}`,
    });
  });

  //internal error
  app.use((error, req, res, next) => {
    res.status(500).json({
      message: "Internal server error",
    });
  });
}

module.exports = errorHandling;
