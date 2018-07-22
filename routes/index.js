var express = require('express');
var router = express.Router();

var admin = require('./admin.js');

var defaultRoute = (req, res, next) => {
	if ( req.cookies.loginStatus == '1' ) {
		res.render('index');
	} else {
		res.render('login');
	}
} 

/* GET home page. */
router.get('/', defaultRoute);

router.get('/adminRoute', admin.defaultRoute);//登录
router.post('/adminLoginAction', admin.adminLoginAction);//登录提交
router.get('/adminOutRoute', admin.adminOutRoute);//退出

module.exports = router;
