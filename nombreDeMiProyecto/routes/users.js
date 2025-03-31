var express = require('express');
var router = express.Router();
var userController = require('../controllers/usercontroller');

/* User routes */
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/perfil', userController.perfil);

module.exports = router;
