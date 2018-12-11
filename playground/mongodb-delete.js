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

	//deletemany(delete all)
	// db.collection('Todos').deleteMany({text: 'Ear it'}).then((result) => {
	// 	console.log(result);
	// },(err)=>{
	// 	console.log('Cannot delete files');
	// })

	//deleteone(delete the first one that matches the critiria)
	// db.collection('Todos').deleteOne({text: 'Hola Amigo'}).then((result) => {
	// 	console.log(result);
	// },(err)=>{
	// 	console.log('Cannot delete files');
	// })

	//findoneanddelete
	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	},(err)=>{
		console.log('Cannot delete files');
	})

	client.close();
});