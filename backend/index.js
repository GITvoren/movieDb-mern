require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;


// parsing middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// connecting to NoSQL MongoDB
mongoose.connect(process.env.MONGODB_URL);
db = mongoose.connection;
db.on('error', () => console.err(err));
db.once('open', () => console.log('Successfully connected to MongoDB Database'));

// main routes
const userRoutes = require('./routes/userRoutes.js');
const movieRoutes = require('./routes/movieRoutes.js');
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);

app.listen(port, () => {
     console.log(`Listening to requests at port ${port}`);
});