var  async = require('async');
var { MongoClient } = require('mongodb');
var mongourl = 'mongodb://localhost:27017/DRINK';
var insertObj = [
	{
		'id': '880001',
		'Text': '良品铺子旗舰店全场满68包邮，领券更优惠'
	},
	{
		'id': '880002',
		'Text': '名品汇—感触奢享人生，满699立减100'
	},
	{
		'id': '880003',
		'Text': '良品铺子旗舰店全场满68包邮，领券更优惠'
	},
	{
		'id': '880004',
		'Text': '名品汇—感触奢享人生，满699立减100'
	}
];
async.waterfall( [
	( cb ) => {
		MongoClient.connect( mongourl, ( err, db ) => {
			if (err) throw err;
			console.log('数据库连接成功');
			cb( null, db );
		} )
	},
	( db, cb) => {
		db.collection( 'HomeText' ).insert( insertObj, ( err, res ) => {
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


