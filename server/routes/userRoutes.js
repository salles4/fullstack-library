const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getBooks', userController.getBooks);
router.post('/createBooks', userController.createBooks);

router.get('/getAuthors', userController.getAuthors);
router.post('/createAuthors', userController.createAuthors);

module.exports = router;