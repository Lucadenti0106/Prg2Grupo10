var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")

/* GET home page. */
router.get('/', productController.product);
router.get('/agregar', productController.product-add);


module.exports = productController;
