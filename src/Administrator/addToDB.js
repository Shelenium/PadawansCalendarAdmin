import mongodb, { MongoClient } from 'mongodb';
import assert from 'assert';

function addToDB(dbName,whatToAdd) {

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://Administrator:PadawansCalendar2017@ds161032.mlab.com:61032/padawans_calendar';

MongoClient.connect(url, function(err,db) {
	assert.equal(null, err);
	console.log("Connection correctly");

	insertDocuments(db, function(){
		db.close();
	});
	
});

var insertDocuments = function(db, callback) {
	var collection = db.collection(dbName);
	collection.insertOne(whatToAdd,
		function(err,result) {
			assert.equal(err,null);
			assert.equal(1, result.result.n);
			assert.equal(1, result.ops.length);
			console.log("New event have been created");
			callback(result);
		});
}
}

export default addToDB;