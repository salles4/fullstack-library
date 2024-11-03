const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getBooks', userController.getBooks);
router.post('/createBooks', userController.createBooks);
router.delete('/deleteBooks/:id', userController.deleteBooks);
router.put('/updateBooks/:id', userController.updateBooks);

router.get('/getAuthors', userController.getAuthors);
router.post('/createAuthors', userController.createAuthors);
router.delete('/deleteAuthors/:id', userController.deleteAuthors);
router.put('/updateAuthors/:id', userController.updateAuthors);


router.get('/getUsers', userController.getUsers);
router.post('/createUser', userController.createUser);


router.get('/getContacts', userController.getContacts);
router.post('/createContacts', userController.createContacts);

router.get('/getBooks/:id', userController.getBooksByID);
router.get('/getAuthors/:id', userController.getAuthorsByID);



module.exports = router;