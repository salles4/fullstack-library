const mongoose = require('mongoose');

//add author table
const AuthorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    link: String,
    picture: String
});

const AuthorModel = mongoose.model("tabletwos", AuthorSchema);

module.exports = AuthorModel;