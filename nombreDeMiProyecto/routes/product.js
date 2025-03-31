var express = require('express');
var router = express.Router();
var productController = require('../controllers/productcontroller');

/* Product routes */
router.get('/', productController.index);
router.get('/detail/:id', productController.detail);
router.get('/add', productController.add);
router.post('/add', productController.processAdd);

module.exports = router;
