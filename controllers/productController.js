const modulo_datos = require('../db/modulo_datos');


let producto = modulo_datos.productos[0];
let comentarios = producto.comentarios;


const productController = {
    mostrarProducto: (req, res) => {
    const id = parseInt(req.params.id); //parseint transforma un string en un numero ("" a numero normal) //
    let producto = null;

    for (let i = 0; i < modulo_datos.productos.length; i++) {
        if (modulo_datos.productos[i].id === id) {
            producto = modulo_datos.productos[i];
            break;
        }
    }

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