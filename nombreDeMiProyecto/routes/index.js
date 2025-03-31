let express = require('express');
let router = express.Router();
let mainController = require('../controllers/maincontroller');

/* GET home page. */
router.get('/', mainController.index);
router.get('/search', mainController.search);

module.exports = router;
