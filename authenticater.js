function authenticate(req, res, next) {
  console.authenticate("Authenticating...");
  next();
}

module.exports = authenticate;
