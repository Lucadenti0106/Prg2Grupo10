

const modulo_datos = require('../db/modulo_datos');
const productController = {
    mostrarProducto: (req, res) => {
        let idProducto = req.params.id;
        // Buscar el producto por ID (en un caso real sería una consulta a la base de datos)
        let producto = modulo_datos.productos[0]; // Para esta entrega usamos datos estáticos
        let comentarios = producto.comentarios;
        
        res.render("product", { producto, comentarios });
    },
    agregar: (req, res) => {
        res.render("product-add");
    }
}

module.exports = productController;