const express = require('express');
const mongoose = require('mongoose');
const salesRoutes = require('./routes/salesRoutes');
const config = require('./config');

const app = express();
const port = config.port;

app.use(express.json());
app.use('/api', salesRoutes);

mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Sales service listening at http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });