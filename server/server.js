//export the third party module called mongooes, and provide the model for the db
var express = require('express');
var bodyParser = require('body-parser');

var {mongooes} = require('./db/mongoose.js')
var {Todo} = require('./models/todo.js');
var {user} = require('./models/users.js');

var app = express();


app.use(bodyParser.json());


app.post('/user',(req,res)=>{
	var newUser = new user({
		email: req.body.text
	});
	newUser.save().then((doc)=>{
		res.send(doc)
	},(e)=>{
		res.status(400).send(e);
	})
});




app.listen(3000, ()=>{
	console.log('Starting on port 3000');
});


