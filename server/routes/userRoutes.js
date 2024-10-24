const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getBooks', userController.getBooks);
router.post('/createBooks', userController.createBooks);
router.delete('/deleteBooks/:id', userController.deleteBooks);

router.put('/updateBook/:id', userController.updateBooks);

router.get('/getAuthors', userController.getAuthors);
router.post('/createAuthors', userController.createAuthors);

router.get('/getUsers', userController.getUsers);
router.post('/createUser', userController.createUser);


router.get('/getContacts', userController.getContacts);
router.post('/createContacts', userController.createContacts);


module.exports = router;