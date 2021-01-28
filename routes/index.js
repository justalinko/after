var express = require('express');
var router = express.Router();
var ig = require('instagram-scraping');
/* GET home page. */
router.get('/', function(req, res, next) {
	ig.scrapeUserPage('aftgazebo').then(result => {
  res.render('index', { 
  	title: 'AFTER GAZEBO & FURNITURE JEPARA' , 
  	result : JSON.stringify(result)
  });
});
});

module.exports = router;
