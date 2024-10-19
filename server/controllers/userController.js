const BooksModel = require('../models/Books');
const AuthorModel = require('../models/Author');

const getBooks = (req,res)=>{
    BooksModel.find()
    .then(users => res.json(users))
    .catch(err =>{
        console.log(err)
          res.status(500).json({error:"Internal Server Error"})
    });
};

const createBooks = (req,res) => {
    const newUser = new BooksModel(req.body);
    newUser.save()
     .then(user => res.json(user))
     .catch(err => {
        console.error(err);
        res.status(500).json({error:"Internal Server Error"});
     });
};

const getAuthors = (req,res)=>{
    AuthorModel.find()
    .then(authors => res.json(authors))
    .catch(err =>{
        console.log(err)
          res.status(500).json({error:"Internal Server Error"})
    });
};

const createAuthors = (req,res) => {
    const newAuthor = new AuthorModel(req.body);
    newAuthor.save()
     .then(author => res.json(author))
     .catch(err => {
        console.error(err);
        res.status(500).json({error:"Internal Server Error"});
     });
};

module.exports = { getBooks, createBooks, getAuthors, createAuthors};