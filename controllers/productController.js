const modulo_datos = require('../db/modulo_datos');
let db = require('../database/models');


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
        if (req.session.usuario) {
            db.Product.create({
                //aca hay que crear toodos los productos y verificar que se agregue correctamente todos los datos, inclusive el id del usuario y todas las variables
                
        })
            
            res.send("Producto agergado exitosamente");
            res.render("product-add")
        } else {
            res.render("product-add", {
                error: "Solo los usuarios logueados pueden agregar productos",
                usuario: req.session.usuario, 
              });        }
    },
    search: (req, res) => {
        res.render("search-results", { productos: modulo_datos.productos });
    }
}

module.exports = productController;