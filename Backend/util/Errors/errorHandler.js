module.exports = function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  // status defaults to 500 if status is outside the 4xx/5xx range
  const { status } = err;
  if (!err.message) err.message = 'Something went bad';
  res.status(status).json({ error: err.message });
};
