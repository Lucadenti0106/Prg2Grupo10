const mainController = {
    index: (req, res) => {
        res.render('index', { title: 'Mercado Liebre Argentina' });
    },
    search: (req, res) => {
        const search = req.query.search;
        res.render('search-results', { 
            title: 'Resultados de búsqueda',
            search: search
        });
    }
};

module.exports = mainController;
