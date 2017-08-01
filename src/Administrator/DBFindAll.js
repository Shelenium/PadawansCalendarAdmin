import mongodb, { MongoClient } from 'mongodb';
import assert from 'assert';

function DBFindAll(dbName) {

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://Administrator:PadawansCalendar2017@ds161032.mlab.com:61032/padawans_calendar';

MongoClient.connect(url, function(err,db) {
	assert.equal(null, err);
	console.log("Connection correctly");

	findDocuments(db, function(){
		console.log(db);
		db.close();
	});
	
});

	var findDocuments = function(db, callback) {
		var collection = db.collection(dbName);
		collection.find( { }, { name: 1 } ).sort( { name: 1 } ).toArray(function(err, results) {
			assert.equal(err,null);
			console.log("We found all!");
			console.log(results);
			callback(results);
		});
	}
}

export default DBFindAll;