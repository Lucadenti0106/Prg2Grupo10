const moduloDatos = require('../db/modulo_datos');
let db = require('../database/models');
let bcrypt = require('bcryptjs');

const usersController = {
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register", { error: null });
    },
    logout: (req, res) =>{
        req.session.destroy();
        res.redirect("/")
    },

    create: function (req, res) {
        let email_usuario = req.body.email;
        let nombre_usuario = req.body.usuario;

        db.User.findOne({ where: { email: email_usuario } })
            .then(function (userEmail) {
                if (userEmail) {
                    return res.render("register", { error: "El email ya existe." });
                }
            })
            .then(function (userName) {
                if (userName) {
                    return res.render("register", { error: "El nombre de usuario ya existe." });
                }

                let contrasenia_encriptada = bcrypt.hashSync(req.body.contrasenia, 10);
                return db.User.create({
                    nombre_usuario: req.body.usuario,
                    email: req.body.email,
                    contrasenia: contrasenia_encriptada,
                    fecha_nacimiento: req.body.fecha_nacimiento,
                    dni: req.body.dni,
                    foto_perfil: req.body.foto_perfil
                });
            })
            .then(function () {
                res.redirect("/");
            })
            .catch(function (error) {
                console.error("Error en registro:", error);
                res.render("register", { error: "Hubo un error al registrar el usuario." });
            });
    },
    profile: (req, res) => {
        res.render("profile", {
            usuario: moduloDatos.usuario,
            productos: moduloDatos.productos
        });
    }
}

module.exports = usersController;