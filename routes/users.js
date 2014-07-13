var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	// res.send('respond with a resource');
	// get all users OR get all users you know
	res.render('index.html', { title: 'Users' });
});


// router.get('/:user', function(req, res, next, id) {
// 	res.send('user page: ' + id)
// });

router.get('/:id', function(req, res){
  res.send('user ' + req.params.id);
});


module.exports = router;
