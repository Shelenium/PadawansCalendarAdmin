const MongoClient = require('mongodb')

class Database {

  constructor (uri) {
    this.uri = uri
    this.db = {}
    this.trainers = []
    this.events = []
    return this
  }

  connect () {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.uri, (err, db) => {
        console.log(this.uri);
        if (err) reject(err)
        this.db = db
        resolve(this)
      })
    })
  }

    getConnection (name) {
    return new Promise((resolve, reject) => {
      this.db.collection(name,
          (err, data) => {
          if (err) reject(err)
          if (data) {
            data.find({}).toArray((err, docs) => {
              if (err) reject(err)
              if (docs) {
                resolve(docs)
              }
            })
        
          } else {
            resolve(0)
          }
        })
    })
  }
    
    insertNewDoc (doc,name) {
    return new Promise((resolve, reject) => {
      this.db.collection(name,
          (err, data) => {
          if (err) reject(err)
          if (data) {
            data.insert(doc, (err, docs) => {
              if (err) reject(err)
              if (docs) {
                resolve(docs)
              }
            })
        
          } else {
            resolve(0)
          }
        })
    })
  }

getData(collection) {
  this.getConnection(collection)
      .then((docs) => { 
        console.log("Get " + collection);
        this[collection] = docs;
      })
      .catch((err) => { console.log("No " + collection + " anymore", err); })
    }

insertDoc(doc, collection) {
  this.insertNewDoc(doc, collection)
      .then((docs) => { 
        console.log("Inserted doc in " + collection);
      })
      .catch((err) => { console.log('Something go wrong in doc insertation', err); })
    }

}
module.exports = Database;