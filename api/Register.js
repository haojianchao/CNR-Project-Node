var async = require( 'async' );
var url = require('url')
var { MongoClient } = require( 'mongodb' );
var mongourl = 'mongodb://localhost:27017/DRINK';

module.exports = {	
	defaultRoute: (req, res, next) => {	
		var {username, password} = req.body
		//console.log(username,password)
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection('users').find( {username}, {_id: 0} ).toArray( ( err, res ) => {
					if ( err ) throw err;
					cb( null, res );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if (result.length==1) {
				res.send("0")
				console.log("已有账号")
			}else{
				res.redirect('/RegAddAction')
			}			
		})		
	},
	RegAddAction: (req, res, next) => {
		var {username, password} = req.body
		//console.log(username,password)
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection( 'users').insert( {username, password}, ( err, res ) => {
					if ( err ) throw err;
					cb( null, 'ok' );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == 'ok' ) {
				res.send("1")				
				console.log("注册成功")				
			}
		})
	}
}
