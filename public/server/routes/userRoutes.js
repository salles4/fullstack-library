const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUsers', userController.getUsers);
router.post('/createUsers', userController.createUsers);

router.get('/getAuthors', userController.getAuthors);
router.post('/createAuthors', userController.createAuthors);

module.exports = router;