const express = require("express")
const router = express.Router()
const productController = {
    index: function(req, res) {
        res.render('product.ejs');
    }
};

module.exports = productController;
