var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController");

router.get('/', mainController.index);


module.exports = router;

// db.sequialize =sequelize;
// db.Sequilize = Sequilize;
// module.exports = db;