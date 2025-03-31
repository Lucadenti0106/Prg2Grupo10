var express = require('express');
var router = express.Router();
var mainController = require('../controllers/maincontroller');

/* GET home page. */
router.get('/', mainController.index);
router.get('/search', mainController.search);

module.exports = router;
