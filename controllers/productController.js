const modulo_datos = require('../db/modulo_datos');


let producto = modulo_datos.productos[0];
let comentarios = producto.comentarios;


const productController = {
    mostrarProducto: (req, res) => {

        res.render("product", { producto, comentarios });
    },
    agregar: (req, res) => {
        const usuario = modulo_datos.usuario;
        res.render("product-add", { usuario });
    },
    search: (req, res) => {
        res.render("search-results", { productos: modulo_datos.productos });
    }
}

module.exports = productController;