let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

/* GET home page. */
router.get('/', mainController.index);

module.exports = router;
