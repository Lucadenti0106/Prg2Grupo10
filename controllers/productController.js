const modulo_datos = require('../db/modulo_datos');
const productController = {
    mostrarProducto: (req, res) => {
        let idProducto = req.params.id;
        // Buscar el producto por ID 
        let producto = modulo_datos.productos[0]; // Para esta entrega usamos datos estáticos
        let comentarios = producto.comentarios;
        
        res.render("product", { producto, comentarios });
    },
    agregar: (req, res) => {
        const usuario = modulo_datos.usuario;
        res.render("product-add", { usuario });
    }
}

module.exports = productController;