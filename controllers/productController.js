
const productController = {
    product: (req, res) => {
        res.render("product");
    },
    agregar: (req, res) => {
        res.render("product-add");
    },

}

module.exports = productController;