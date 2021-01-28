var ig = require('instagram-scraping');

ig.scrapeUserPage('aftgazebo').then(res => {
	console.dir(res)
});