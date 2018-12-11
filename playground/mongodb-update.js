//const MongoClient = require('mongodb').MongoClient;
//create a variable called MongoClient and get .MongoClient from the require
const {MongoClient, ObjectID} = require('mongodb');
 

//create a connection to the db
MongoClient.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true },(err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('todoapp');

	//findOneAndUpdate
	db.collection('users').findOneAndUpdate({
		_id: new ObjectID('5c0e07e56d464c2deb2c94fb')
	},{$set:{
		name: 'YILUN LIU'
	},$inc:{age: 3}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	})

	client.close();
});