var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', content: 'Express es una librería de nodejs para manejar solicitudes y respuestas HTTP'});
});

module.exports = router;
