var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")

/* GET home page. */
router.get('/:id', productController.mostrarProducto);
router.post('/:id/comentar', productController.comentar);

router.get('/product-add', productController.product);
router.post('/product-add', productController.agregar);
router.get('/search-results', productController.search);






module.exports = router;
