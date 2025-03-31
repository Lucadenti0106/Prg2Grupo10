const userController = {
    login: function(req, res) {
        res.render('login', { title: 'Ingresar' });
    },
    register: function(req, res) {
        res.render('register', { title: 'Registro' });
    },
    perfil: function(req, res) {
        res.render('profile', { title: 'Mi perfil' });
    }
};

module.exports = userController;
