var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")

/* GET home page. */
router.get('/product', productController.product);
router.get('/product-add', productController.agregar);


module.exports = router;
