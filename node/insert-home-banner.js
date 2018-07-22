var  async = require('async');
var { MongoClient } = require('mongodb');
var mongourl = 'mongodb://localhost:27017/DRINK';
var insertObj = [
	{
		'id': '880001',
		'BannerUrl' : 'https://pic4.cnrmall.com/image/ed/cb/edcbbd0be87803911391c1e440e8d424.jpg'
	},
	{
		'id': '880002',
		'BannerUrl' : 'https://pic2.cnrmall.com/image/12/f0/12f02b7389e76f35fd760d04c7ebc441.jpg'
	},
	{
		'id': '880003',
		'BannerUrl' : 'https://pic2.cnrmall.com/image/e4/0c/e40c7b5d6cfd316885c894321ea3e024.jpg'
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
		db.collection( 'HomeBanner' ).insert( insertObj, ( err, res ) => {
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


