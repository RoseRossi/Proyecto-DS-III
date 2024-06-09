const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  id_product: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 10 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);
