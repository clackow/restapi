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
	//SELECT FROM TODS WHERE COMPLETED = TRUE  
	db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs, undefined, 2));


	},(err)=>{
		console.log(`Unable to fetch data ${err}`);
	})	

	client.close();
});