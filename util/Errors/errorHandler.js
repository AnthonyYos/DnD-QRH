module.exports = function errorHandler(err, req, res, next) {
  // statusCode defaults to 500 if statusCode is outside the 4xx/5xx range
  if (res.headersSent) {
    return next(err);
  }
  const { status } = err;
  if (!err.message) err.message = 'Something went bad';
  res.status(status).json({ success: false, error: err.message });
};
