const mongoose = require('mongoose');

//add books table
const BooksSchema = new mongoose.Schema({
    booktitle: String,
    bookdesc: String,
    bookcover: String,
    category: String,
    author: String,
    publisher: String,
    shelfno: Number,
    isbn: Number
});

const BooksModel = mongoose.model("books", BooksSchema);

module.exports = BooksModel;