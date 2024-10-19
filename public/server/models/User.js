const mongoose = require('mongoose');

//add books table
const UserSchema = new mongoose.Schema({
    booktitle: String,
    bookdesc: String,
    bookcover: String,
    category: String,
    author: String,
    publisher: String,
    shelfno: Number,
    isbn: Number
});

const UserModel = mongoose.model("tableones", UserSchema);

module.exports = UserModel;