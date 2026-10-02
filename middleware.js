module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // redirect ulr (to be redirect after login)
    req.session.redirectUrl=req.originalUrl;
    req.flash(
      "error",
      "you must be logged in to create listing!, kindly login first",
    );
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl=(req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl;
  }
  next();
}