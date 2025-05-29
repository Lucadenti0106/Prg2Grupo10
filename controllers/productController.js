const modulo_datos = require('../db/modulo_datos');
let db = require('../database/models');
const Op = db.Sequelize.op


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
                })

        
            })

        .catch(error => {
            console.log(error);
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
        if (!req.session.usuario) {

        return res.redirect("/users/login");
    }
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
            .catch(error => {
                console.log(error);
            });

    },
    search: (req, res) => {
       let search = req.query.search;
    
        db.Product.findAll({
            where: {
                nombre_producto: {[Op.like]: `%${search}%` }
            },
            include: [
                { model: db.User, as: "usuario" },
                { model: db.Comentario, as: "comentarios" }
            ]
        })
        .then(productos => {
            if (productos.length === 0) {
                res.render("search-results", { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
            } else {
                res.render("search-results", { productos, mensaje: null });
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
                    res.redirect("/product/detalle/" + id_producto);
                })
                .catch(error => {
                    console.log(error);
                });

        }
    }
}

module.exports = productController;