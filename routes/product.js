var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController")

/* GET home page. */
router.get('/detalle/:id', productController.mostrarProducto);
router.post('/detalle/:id/comentar', productController.comentar);

router.get('/product-add', productController.product); // muestra el formulario para agregar un producto
router.post('/product-add', productController.agregar); // procesa el formulario para agregar un producto
router.get('/search-results', productController.search);






module.exports = router;
