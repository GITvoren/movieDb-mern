const User = require('../models/User.js');

const registerUser = (req, res) => {
     res.json('Ola from Users Controller');
}

const loginUser = (req, res) => {
     res.json('Ola test test');
}



module.exports = {
     registerUser,
     loginUser
}