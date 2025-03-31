const userController = {
    login: function(req, res) {
        res.render('login', { title: 'Ingresar' });
    },
    processLogin: function(req, res) {
        // Process login logic would go here
        res.redirect('/');
    },
    register: function(req, res) {
        res.render('register', { title: 'Registro' });
    },
    processRegister: function(req, res) {
        // Process register logic would go here
        res.redirect('/');
    },
    profile: function(req, res) {
        res.render('profile', { title: 'Mi perfil' });
    }
};

module.exports = userController;
