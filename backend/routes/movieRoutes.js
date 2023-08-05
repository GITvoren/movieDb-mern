const express = require('express');
const router = express.Router();
const {
     getMovies
} = require('../controllers/movieController.js');



router.get('/', getMovies);



module.exports = router;