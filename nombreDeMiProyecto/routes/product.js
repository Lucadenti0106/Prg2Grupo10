var express = require('express');
var router = express.Router();
var productController = require('../controllers/productcontroller');

/* Product routes */
router.get('/', productController.index);
router.get('/detalle/:id', productController.detalle);
router.get('/agregar', productController.agregar);

module.exports = router;
