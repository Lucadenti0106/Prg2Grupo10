const moduloDatos = require('../db/modulo_datos'); 
let db = require('../database/models');
const mainController = {
    index: (req, res) => {
        db.Product.findAll({
        })
        .then(productos => {
            res.render('index', { productos });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error al cargar productos');
        });

        // Si querés dejar este comentario, debe estar dentro de una función o fuera del objeto
        // res.render("index", { productos: moduloDatos.productos }); 
    }
};
module.exports = mainController;