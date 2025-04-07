


const userData = require('../data/userdata');

const usersController = {
    login: (req, res) => {
        res.render("login");
    },    
    register: (req, res) => {
        res.render("register");
    },    
    profile: (req, res) => {
        // Pasar los datos del usuario a la vista
        const usuario = userData.usuario;
        res.render("profile", { usuario });
    }
}

module.exports = usersController;