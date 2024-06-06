const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db');
const Review = require('./models/Review');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a MongoDB
connectDB();

app.use(express.json());
app.use(cors());

// Rutas de la API
app.post('/api/reviews', async (req, res) => {
  const { id_product, title, content, rating } = req.body;
  if (rating < 1 || rating > 10) {
    return res.status(400).send({ error: 'Rating must be between 1 and 10' });
  }
  try {
    const newReview = new Review({ id_product, title, content, rating });
    await newReview.save();
    res.send(newReview);
  } catch (err) {
    res.status(500).send({ error: 'Failed to create review' });
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.send(reviews);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch reviews' });
  }
});

app.put('/api/reviews/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, rating } = req.body;
  if (rating < 1 || rating > 10) {
    return res.status(400).send({ error: 'Rating must be between 1 and 10' });
  }
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { title, content, rating },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).send({ error: 'Review not found' });
    }
    res.send(updatedReview);
  } catch (err) {
    res.status(500).send({ error: 'Failed to update review' });
  }
});

app.delete('/api/reviews/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).send({ error: 'Review not found' });
    }
    res.send({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete review' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
