const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());
app.use('/api', reviewRoutes);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/reviews';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = app;
