const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")

/* Product routes */
router.get('/product', productController.product);
router.get('/product/product-add', productController.agregar);



module.exports = router;
