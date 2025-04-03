let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

/* Product routes */
router.get('/', productController.index);
router.get('/agregar', productController.agregar);



module.exports = router;
