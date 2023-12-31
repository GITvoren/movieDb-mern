const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     synopsis: {
          type: String,
          required: true
     },
     releaseDate: {
          type: Date,
          default: Date.now
     }//genres, ratings, cast


}/* , {timestamps: true} */);


module.exports = mongoose.model("Movie", movieSchema);