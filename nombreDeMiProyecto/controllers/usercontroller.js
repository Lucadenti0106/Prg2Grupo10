const userController = {
    login: function(req, res) {
        res.render('login.ejs');
    },
    register: function(req, res) {
        res.render('register.ejs');
    },
    perfil: function(req, res) {
        res.render('profile.ejs');
    }
};

module.exports = userController;
