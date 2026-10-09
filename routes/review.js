const express = require("express");
// const router = express.Router();  we cannot use it because then js will not be able to access the req.param in the api call
const router = express.Router({ mergeParams: true }); // use this to overcome the error
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// Review
// Post Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

// Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
