var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/profile', usersController.profile);
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post("/register", usersController.create);
router.get('/logout', usersController.logout);



module.exports = router;
