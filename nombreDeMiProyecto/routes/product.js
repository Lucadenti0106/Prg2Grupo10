let express = require('express');
let router = express.Router();
const productController = require("../controllers/productController")

/* Product routes */
router.get('/', productController.product);
router.get('/agregar', productController.agregar);



module.exports = router;
