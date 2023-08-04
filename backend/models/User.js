const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true
     },
     password: {
          type: String,
          required: true
     },
     dateRegistered: {
          type: Date,
          default: Date.now
     }


}/* , {timestamps: true} */);