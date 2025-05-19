const moduloDatos = require('../db/modulo_datos');
let db = require('../database/models');
let bcrypt = require('bcryptjs');

const usersController = {
    login: (req, res) => {
        res.render("login");
    },    
    register: (req, res) => {
        res.render("register");
    },
    create: (req, res) => {
        
        let contrasenia_encriptada = bcrypt.hashSync(req.body.contrasenia, 10);
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            contrasenia: contrasenia_encriptada,
            fecha_nacimiento: req.body.fecha_nacimiento,
            dni: req.body.dni,
            foto_perfil: req.body.foto_perfil
        })
        .then(function(user) {
            res.redirect("/");
        })
    },

    profile: (req, res) => {
        res.render("profile", {
            usuario: moduloDatos.usuario,
            productos: moduloDatos.productos
        });
    },
}

module.exports = usersController;