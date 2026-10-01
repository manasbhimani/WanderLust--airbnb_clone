module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash(
      "error",
      "you must be logged in to create listing!, kindly login first",
    );
    return res.redirect("/login");
  }
  next();
};
