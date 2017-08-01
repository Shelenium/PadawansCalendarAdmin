const express = require('express');
const path = require('path');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const assert = require('assert');
const url = require('./src/config/db_A');
const match = require('react-router');
const RoutingContext = require('react-router');
//const routes = require('./routes');
const Database = require('./src/Database');
let database = new Database(url);
let multer = require('multer');
let upload = multer();


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname,  'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/trainers', (req, res) => {
	database.getData('trainers');
	res.json(database.trainers);    
});
app.get('/api/events', (req, res) => {
	database.getData('events');
	res.json(database.events);    
});
app.post('/api/addevent', upload.fields([]), (req, res) => {
  	let formData = req.body;
  	res.send('New event added to database');
  	database.insertDoc(formData, 'events');
});


app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, 'build', 'index.html'));
//  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
 //   if (error) {
 //     res.status(500).send(error.message)
 //   } else if (redirectLocation) {
 //     res.redirect(302, redirectLocation.pathname + redirectLocation.search)
 //   } else if (renderProps) {
 //     res.status(200).sendFile(path.join(__dirname, 'build', 'index.html'))
 //   } else {
 //     res.status(404).send('Not found')
 //   }
//	});
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


   database.connect()
     	.then((err, db) => { 
      		console.log("Connection correctly");
		})
      	.then(() => {
      		database.getData('trainers');
      	})
      	.then(() => {
      		database.getData('events');
      	})
      	.catch((err) => { 
      		console.log("Connection not correctly",err);
     	})

