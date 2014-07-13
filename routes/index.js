var express = require('express'),
	router = express.Router();

// GET '/'
router.get('/', function(req, res) {
	res.render('index.html', { title: 'ROOT' });
});

// GET '/home'
router.get('/home', function(req, res) {
	res.render('index.html', { 
		title: 'HOME',
		key: '' 
	});
});

// GET '/login'
router.get('/login', function(req, res) {
	res.render('index.html', { 
		title: 'LOGIN',
		key: '' 
	});
});





module.exports = router;
