const moduloDatos = require('../db/modulo_datos'); 

const mainController = {
    index: (req, res) => {
        // Pasar la lista de productos a la vista index
        res.render("index", { productos: moduloDatos.productos }); 
    },
    search: (req, res) => {
        res.render("search-results");
    }
}
module.exports = mainController;
