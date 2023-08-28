const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
     const userExist = await User.findOne({username: req.body.username});
     if(userExist)
     return res.status(409).json("Username already exists");

     if(req.body.password.length < 8)
     return res.status(409).json("Password should atleast be a minimum of 8 characters");

     try{
          const user = new User({
               username: req.body.username,
               password: await bcrypt.hash(req.body.password, 10)
          });
          
          const newUser = await user.save();
          res.status(201).json("Successfully Registered User");

     }catch{
          res.status(409).json("Username must have atleast 6 characters");
     }
}

const loginUser = async (req, res) => {
     const user = await User.findOne({username: req.body.username});
     if(user == null)
     return res.status(400).json("Invalid Username or Password");

     try{
          const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

          if(!isPasswordCorrect)
          return res.status(400).json("Invalid Username or Password");

          const dataPayload = {
               _id: user._id,
               username: user.username
          }

          const encodedToken = jwt.sign(dataPayload, process.env.JWT_SECRET);
          res.json(encodedToken);

     }catch(err){
          res.status(500).json(err.message)
     }

}



module.exports = {
     registerUser,
     loginUser
}