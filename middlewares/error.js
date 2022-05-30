const middlewareErrors = (error, _req, res, _next) => {
  res.status(error.status || 500).json({ message: error.message });
};

module.exports = middlewareErrors;