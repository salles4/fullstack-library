const BooksModel = require('../models/Books');
const AuthorModel = require('../models/Author');
const UserModel = require('../models/User');
const ContactModel = require('../models/Contact');

// -------------- FOR BOOKS
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

const updateBooks = (req, res) => {
    BooksModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
     .then(user => res.json(user))
     .catch(err => {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
     });
};

const deleteBooks = (req,res) => {
    BooksModel.findByIdAndDelete(req.params.id)
     .then(() => res.json({message: "Book Deleted"}))
     .catch(err => {
        console.error(err);
        res.status(500).json({error:"Internal Server Error"})
     })
}

// -------------- FOR AUTHORS
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

const deleteAuthors = (req,res) => {
    AuthorModel.findByIdAndDelete(req.params.id)
     .then(() => res.json({message: "Author Deleted"}))
     .catch(err => {
        console.error(err);
        res.status(500).json({error:"Internal Server Error"})
     })
}

const updateAuthors = (req, res) => {
    AuthorModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
     .then(author => res.json(author))
     .catch(err => {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
     });
};

// -------------- FOR USERS
const getUsers = (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Interval Server Error"})
    })
}


const createUser = (req, res) => {
    const newUser = new UserModel(req.body);
    newUser.save()
    .then(user => res.json(user))
    .catch(err => {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    })
}

// -------------- FOR Contact US

const createContacts = (req, res ) =>{
    const newContact = new ContactModel(req.body);
    newContact.save()
    .then(contacts => res.json(contacts))
    .catch(err => {
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    })
}

const getContacts = (req,res)=>{
    ContactModel.find()
    .then(contacts => res.json(contacts))
    .catch(err =>{
        console.log(err)
          res.status(500).json({error:"Internal Server Error"})
    });
};


const getBooksByID =(req, res ) =>{
    BooksModel.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => {
       console.log(err);
       res.status(500).json({error: "Internal Server Error"});
    });
};

const getAuthorsByID =(req, res ) =>{
    AuthorModel.findById(req.params.id)
    .then(author => res.json(author))
    .catch(err => {
       console.log(err);
       res.status(500).json({error: "Internal Server Error"});
    });
}

module.exports = { getBooks, createBooks, updateBooks, deleteBooks, getAuthors, createAuthors, updateAuthors, deleteAuthors, getUsers, createUser, getContacts, createContacts, getBooksByID, getAuthorsByID};
