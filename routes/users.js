var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/profile', productController.profile);
router.get('/login', productController.login);
router.get('/register', productController.register);

module.exports = usersController;
