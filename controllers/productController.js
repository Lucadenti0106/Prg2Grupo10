
const productController = {
    mostrarProducto: (req, res) => {
        let producto = req.params.id
        res.render(producto)
    },
    agregar: (req, res) => {
        res.render("product-add");
    },

}

module.exports = productController;