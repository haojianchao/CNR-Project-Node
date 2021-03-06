var  async = require('async');
var { MongoClient } = require('mongodb');
var mongourl = 'mongodb://localhost:27017/DRINK';
var insertObj = {
	"goodsId": 21018816,
	"goodsName": "奥力福羽绒冬被央广周年庆特供 货号123177",
	"goodsPrice":379,
	"banner": [
		{
			"id": "22406850",
			"imageUrl": "https://pic3.cnrmall.com/dw/123177/123177_0.jpg"
		},
		{
			"id": "22406851",
			"imageUrl": "https://pic2.cnrmall.com/dw/123177/123177_0_0.jpg"
		},
		{
			"id": "22406852",
			"imageUrl": "https://pic1.cnrmall.com/dw/123177/123177_0_1.jpg"
		},
		{
			"id": "22406853",
			"imageUrl": "https://pic3.cnrmall.com/dw/123177/123177_0_2.jpg"
		},
		{
			"id": "22406854",
			"imageUrl": "https://pic3.cnrmall.com/dw/123177/123177_0_3.jpg"
		}
	],
	"BodyTitPic": {
		"id": "22406899",
		"imageUrl": "https://pic1.cnrmall.com/picself/tv2/new_tv_title5.jpg"
	},
	"BodyList": [
		{
			"id": "22406855",
			"imageUrl": "https://pic.cnrmall.com/image/47/43/47438764d883c9028f0d8376fa9521a2.jpg"
		},
		{
			"id": "22406856",
			"imageUrl": "https://pic.cnrmall.com/image/fb/ec/fbeceacd8efab2767341c9a814677986.jpg"
		},
		{
			"id": "22406857",
			"imageUrl": "https://pic.cnrmall.com/image/a6/fa/a6fa5b9cbdc13f38a971a42adc4f34f5.jpg"
		},
		{
			"id": "22406858",
			"imageUrl": "https://pic.cnrmall.com/image/7b/65/7b65d4e2727d4d9e72b8b6d141292713.jpg"
		},
		{
			"id": "22406859",
			"imageUrl": "https://pic.cnrmall.com/image/84/67/846724ffd775bd848f11dc6494cb73ba.jpg"
		},
		{
			"id": "22406860",
			"imageUrl": "https://pic.cnrmall.com/image/9c/44/9c44975a42b7a6baf06fbd342fcdea23.jpg"
		}
	]
	
};
async.waterfall( [
	( cb ) => {
		MongoClient.connect( mongourl, ( err, db ) => {
			if (err) throw err;
			console.log('数据库连接成功');
			cb( null, db );
		} )
	},
	( db, cb) => {
		db.collection( 'Detail' ).insert( insertObj, ( err, res ) => {
			if ( err ) throw err;
			console.log('insert success');
			cb( null, 'ok' );
			db.close();
		} )
	}
], ( err, result ) => {
	if ( err ) throw err;
	if ( result == 'ok' ) {
		console.log( '插入数据成功' );
	}
} )


