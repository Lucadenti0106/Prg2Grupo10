const productController = {
    index: function(req, res) {
        res.render('index', { title: 'Todos los productos' });
    },
    detalle: function(req, res) {
        const productId = req.params.id;
        res.render('product', { 
            title: 'Detalle del producto',
            productId: productId
        });
    },
    agregar: function(req, res) {
        res.render('product-add', { title: 'Agregar producto' });
    },
    search: function(req, res) {
        const search = req.query.search;
        return res.render('search-results', { 
            title: 'Resultados de búsqueda',
            search: search
        });
    }
};

module.exports = productController;
