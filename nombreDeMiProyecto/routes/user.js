const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* User routes */
router.get('/user/login', userController.login);
router.get('/user/register', userController.register);
router.get('/user/perfil', userController.perfil);

module.exports = router;
