const modulo_datos = require('../db/modulo_datos');
let db = require('../database/models');


let producto = modulo_datos.productos[0];
let comentarios = producto.comentarios;


const productController = {
    mostrarProducto: (req, res) => {
        const id = Number(req.params.id);

        db.Product.findByPk(id, {
            include: [
                {
                    model: db.Comentario,
                    as: 'comentarios',
                    include: [
                        {
                            model: db.User,
                            as: 'usuario'
                        }
                    ]
                }
            ]
        })
            .then(producto => {

                res.render("product", {
                    producto: producto,
                    comentarios: producto.comentarios, // ahora sí
                    usuario: req.session.usuario
                });
            });
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
        let termino = req.query.nombre;

        db.Product.findAll({
            where: {
                nombre_producto: { [db.Sequelize.Op.like]: `%${termino}%` }
            },
            include: [{ model: db.User, as: "usuario" }]
        })
        .then(productos => {
            if (productos.length === 0) {
                res.render("search-results", { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
            } else {
                res.render("search-results", { productos: productos });
            }
        })
        .catch(error => console.log(error));
    },
    comentar: (req, res) => {
        let usuario = req.session.usuario;
        let id_producto = req.params.id;

        if (!usuario) {
            return res.redirect("/users/login");
        } else {
            db.Comentario.create({
                comentario: req.body.comentar,
                id_producto: id_producto,
                id_usuario: usuario.id,
            })
                .then(() => {
                    res.redirect("/product/" + id_producto);
                })

        }
    }
}

module.exports = productController;