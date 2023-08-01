const router = require('express').Router();

const {
     registerUser
} = require('../controllers/userController.js');



router.get('/', registerUser);


module.exports = router;