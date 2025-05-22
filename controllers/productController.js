const modulo_datos = require('../db/modulo_datos');
let db = require('../database/models');


let producto = modulo_datos.productos[0];
let comentarios = producto.comentarios;


const productController = {
    mostrarProducto: (req, res) => {
        const id = Number(req.params.id);
    
        db.Product.findByPk(id)
            .then(producto => {
                if (!producto) {
                    return res.status(404).send("Producto no encontrado");
                }
                
                res.render("product", {
                    producto: producto,
                    comentarios: [], // A futuro podés traer comentarios reales
                    usuario: req.session.usuario
                });
            })
    },
    product: (req, res) => {

        if (!req.session.usuario) {
            res.redirect("/login");

        } else {
            res.render("product-add")

        }

    },
    agregar: (req, res) => {
        db.Product.create({
            id_usuario: req.session.usuario.id,
            imagen_producto: req.body.imagen,
            nombre_producto: req.body.nombre_producto,
            descripcion: req.body.descripcion
        })
        .then(() => {
            return db.User.findOne({ where: { id: req.session.usuario.id } });
        })
        .then(usuario => {
            let cantidad = Number(usuario.productos_agregados);
            cantidad = cantidad + 1;
    
            return db.User.update(
                { productos_agregados: cantidad },
                { where: { id: req.session.usuario.id } }
            );
        })
        .then(() => {
            res.send("Producto agregado exitosamente");
        })

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