var express = require('express');
var router = express.Router();
var userController = require('../controllers/usercontroller');

/* User routes */
router.get('/login', userController.login);
router.post('/login', userController.processLogin);
router.get('/register', userController.register);
router.post('/register', userController.processRegister);
router.get('/profile', userController.profile);

module.exports = router;
