const usersController = {
    login: (req, res) => {
        res.render("index");
    },    
    register: (req, res) => {
        res.render("register");
    },    
    profile: (req, res) => {
        res.render("profile");
    }
}

module.exports = usersController;