const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const reviewSchema = new mongoose.Schema({
  id_product: String,
  title: String,
  content: String,
  rating: Number
});

const Review = mongoose.model('Review', reviewSchema);

app.post('/add-reviews', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.send(review);
});

app.get('/get-reviews', async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
