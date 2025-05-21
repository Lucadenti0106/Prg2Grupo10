const modulo_datos = require('../db/modulo_datos');
let db = require('../database/models');


let producto = modulo_datos.productos[0];
let comentarios = producto.comentarios;


const productController = {
    mostrarProducto: (req, res) => {
    const id = Number(req.params.id); 
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
    },
    comentar: (req, res) => {

        const usuario = req.session.usuario;
        const id = usuario.id;
        const nombre = usuario.nombre;
        if (req.session) {
            db.Comentario.create({
                comentario: req.body.comentar,
                id_producto: req.params.id,
                id_usuario: req.session.usuario.id,
            })
        } else {
            // El usuario NO está logueado redirije a login para que inicie sesion y ahi pueda comentar sobre el producto
            return res.redirect('/login');
        }

    }
}

module.exports = productController;