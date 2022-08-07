module.exports = function errorHandler(err, req, res, next) {
  // statusCode defaults to 500 if statusCode is outside the 4xx/5xx range
  if (res.headersSent) {
    return next(err);
  }
  const { statusCode } = err;
  if (!err.message) err.message = 'Something went bad';
  res.status(statusCode).json({ success: false, error: err.message });
};
