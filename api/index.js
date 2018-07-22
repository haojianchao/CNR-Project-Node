var express = require('express');
var router = express.Router();

var admin = require('./admin.js');
var HomeBanner = require('./HomeBanner.js');
var HomeText = require('./HomeText.js');
var HomeNav = require('./HomeNav.js');
var HomeBoard = require('./HomeBoard.js');

var ListNNC = require('./ListNNC.js');
var ListBrandSale = require('./ListBrandSale.js');
var ListHotTop10 = require('./ListHotTop10.js');

var Detail = require('./Detail.js');

var Area = require('./Area.js');

var Register = require('./Register.js');

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

router.get('/HomeBanner', HomeBanner.defaultRoute);//获取轮播图
router.get('/HomeText', HomeText.defaultRoute);//获取文字轮播
router.get('/HomeNav', HomeNav.defaultRoute);//获取NAV导航图
router.get('/HomeBoard', HomeBoard.defaultRoute);//获取home信息

router.get('/ListNNC', ListNNC.defaultRoute);//获取NNC列表
router.get('/ListBrandSale', ListBrandSale.defaultRoute);//获取品牌特卖
router.get('/ListHotTop10', ListHotTop10.defaultRoute);//获取热销TOP10

router.get('/Detail', Detail.defaultRoute);//获取详情页

router.get('/Area', Area.defaultRoute);//获取省市县菜单

router.post('/Register', Register.defaultRoute);//注册
router.post('/RegAddAction', Register.RegAddAction);//注册

module.exports = router;


