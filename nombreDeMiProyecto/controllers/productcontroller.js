
const productController = {

    login: function (req, res) {
        res.render('login.ejs');
    },
    product: function (req, res) {
        res.render('product.ejs');
    },
    agregar: function (req, res) {
        res.render('product-add.ejs');
    }
};

module.exports = productController;
