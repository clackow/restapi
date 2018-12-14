//const MongoClient = require('mongodb').MongoClient;
//create a variable called MongoClient and get .MongoClient from the require
const {MongoClient, ObjectID} = require('mongodb');
 
var obj = new ObjectID();
console.log(obj);

//create a connection to the db
MongoClient.connect('mongodb://localhost:27017/todoapp',{ useNewUrlParser: true },(err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('todoapp'); 
	


	// //insert data into mongo
	db.collection('Todos').insertOne({
		text: 'Hola Amigo',
		completed: false
	},(err, result) => {
		if(err){
			return console.log('Unable to insert data');
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});

	// db.collection('users').insertOne({
	// 	name: 'Daniel Liu',
	// 	age: 22,
	// 	location: 'Wuhan China',
	// 	completed:false
	// },(err,result) => {
	// 	if(err){
	// 		return console.log('Unable to insert data');
	// 	}
	// 	//result.ops is an array
	// 	console.log(result.ops[0]._id.getTimestamp());
	// })

	client.close();
});