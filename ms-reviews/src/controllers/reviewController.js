const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
    console.log("pasé por addReview");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
    console.log("pasé por getReview");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
