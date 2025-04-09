const moduloDatos = require('../db/modulo_datos');

const usersController = {
    login: (req, res) => {
        res.render("login");
    },    
    register: (req, res) => {
        res.render("register");
    },    
    profile: (req, res) => {
        res.render("profile", {
            usuario: moduloDatos.usuario,
            productos: moduloDatos.productos
        });
    },
}

module.exports = usersController;