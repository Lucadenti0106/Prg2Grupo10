
const productController = {
    product: (req, res) => {
        res.render("product");
    },
    agregar: (req, res) => {
        res.render("product-add");
    },
    buscar:  (req, res) => {
        res.render("rearch-results")
    }
}

module.exports = productController;