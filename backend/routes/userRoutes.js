const router = require('express').Router();

const {
     registerUser,
     loginUser
} = require('../controllers/userController.js');



router.get('/register', registerUser);

router.get('/login', loginUser);


module.exports = router;