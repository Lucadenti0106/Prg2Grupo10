const mainController = {
    index: function(req, res) {
        return res.render('index', { title: 'Mercado Liebre Argentina' });
    }

};

module.exports = mainController;