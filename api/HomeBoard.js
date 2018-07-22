var async = require( 'async' );
var { MongoClient } = require( 'mongodb' );
var mongourl = 'mongodb://localhost:27017/DRINK';

module.exports = {
	defaultRoute : ( req, res, next ) => { //获取商品模块
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection('HomeBoard').find( {}, {_id: 0} ).toArray( ( err, res ) => {
					if ( err ) throw err;
					cb( null, res );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			res.send( result )
		})
	}
}

