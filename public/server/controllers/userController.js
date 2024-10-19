const UserModel = require('../models/User');

const getUsers = (req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err =>{
        console.log(err)
          res.status(500).json({error:"Internal Server Error"})
    });
};

const createUsers = (req,res) => {
    const newUser = new UserModel(req.body);
    newUser.save()
     .then(user => res.json(user))
     .catch(err => {
        console.error(err);
        res.status(500).json({error:"Internal Server Error"});
     });
};

module.exports = {getUsers, createUsers};