const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* User routes */
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/perfil', userController.perfil);

module.exports = router;
