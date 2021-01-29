var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next)
{
	var email = req.param('email');
	var name = req.param('name');
	var msg = req.param('message');
	var text = `Hallo saya ${name} (${email}) , Ingin menyampaikan pesan : ${msg}`;
	res.redirect(`https://api.whatsapp.com/send?phone=6282132754108&text=${text}`);
});

module.exports = router;