var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index');
});

router.get('/creditos', function(req, res, next){
	res.render('creditos');
});

module.exports = router;
