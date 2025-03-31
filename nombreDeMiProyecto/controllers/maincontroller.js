const mainController = {
    index: function(req, res) {
        return res.render('index', { title: 'Mercado Liebre Argentina' });
    },
    search: function(req, res) {
        const search = req.query.search;
        return res.render('search-results', { 
            title: 'Resultados de búsqueda',
            search: search
        });
    }
};

module.exports = mainController;