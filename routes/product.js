var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")

/* GET home page. */
router.get('/product/:id', productController.mostrarProducto);
router.post('/product/:id/comentar', productController.comentar);

router.get('/users/product-add', productController.product);
router.post('/product-add', productController.agregar);
router.get('/search-results', productController.search);






module.exports = router;
