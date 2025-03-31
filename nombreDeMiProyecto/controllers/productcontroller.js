const productController = {
    index: function(req, res) {
        // Here you would fetch products from a database
        res.render('index', { title: 'Todos los productos' });
    },
    detail: function(req, res) {
        // Here you would fetch a specific product from a database
        const productId = req.params.id;
        res.render('product', { 
            title: 'Detalle del producto',
            productId: productId
        });
    },
    add: function(req, res) {
        res.render('product-add', { title: 'Agregar producto' });
    },
    processAdd: function(req, res) {
        // Process add product logic would go here
        res.redirect('/products');
    }
};

module.exports = productController;
