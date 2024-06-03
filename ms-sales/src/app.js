const express = require('express');
const mongoose = require('mongoose');
const salesRoutes = require('./routes/salesRoutes');
const config = require('./config');

const app = express();
app.use(express.json());

app.use('/api', salesRoutes);

mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    })
    .catch(err => console.error('Could not connect to MongoDB', err));
