const validator = (validationSchema) => (req, res, next) => {
  validationSchema
    .validateAsync(req.body)
    .then(() => {
      next();
    })
    .catch((e) => {
      res
        .status(400)
        .json({
          message: e.message,
          success: false,
          data: {}
        })
        .end();
    });
};

module.exports = { validator };
