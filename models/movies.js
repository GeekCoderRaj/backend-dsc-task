const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 1
    },
    director:{
        type: String,
        required: true,
    },
})

const Movie = new mongoose.model('movies', MovieSchema);

module.exports = Movie;