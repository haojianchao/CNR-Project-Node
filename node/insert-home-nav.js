var  async = require('async');
var { MongoClient } = require('mongodb');
var mongourl = 'mongodb://localhost:27017/DRINK';
var insertObj = [
	{
		'id': '880001',
		'name': 'tv',
		'NavUrl': 'https://pic3.cnrmall.com/image/71/f4/71f405d093baa7555234bb656e6f22bc.jpg'
	},
	{
		'id': '880002',
		'name': 'goods',
		'NavUrl': 'https://pic2.cnrmall.com/image/a9/bc/a9bc0dc399ac349935dd844ff9810598.jpg'
	},
	{
		'id': '880003',
		'name': 'special',
		'NavUrl': 'https://pic3.cnrmall.com/image/46/1e/461e4d3a6b4f03c7a474dfd4bf4d9958.jpg'
	},
	{
		'id': '880004',
		'name': 'store',
		'NavUrl': 'https://pic1.cnrmall.com/image/ec/90/ec9025585f03e916106dd3a824643711.jpg'
	},
	{
		'id': '880005',
		'name': 'special',
		'NavUrl': 'https://pic2.cnrmall.com/image/98/db/98db45a3dbf3da632a0a44d64b7776d6.jpg'
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
		db.collection( 'HomeNav' ).insert( insertObj, ( err, res ) => {
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


