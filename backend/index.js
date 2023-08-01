const express = require('express');
const mongoose = require('mongoose');
const app = express();



// parsing middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// main routes
const userRoutes = require('./routes/userRoutes.js');
app.use('/users', userRoutes);


app.listen(4001, () => {
     console.log('Listening to requests at port 4001');
});