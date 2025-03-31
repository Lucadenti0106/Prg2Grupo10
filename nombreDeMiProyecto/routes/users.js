let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

/* User routes */
router.get('/', userController.index);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/perfil', userController.perfil);

module.exports = router;
