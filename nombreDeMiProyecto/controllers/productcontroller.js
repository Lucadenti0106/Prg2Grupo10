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
        res.render('agregar', { title: 'Agregar producto' });
    }
};

module.exports = productController;
