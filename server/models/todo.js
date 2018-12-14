//create a model for the database, automatically pluralized and small letters
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
	text:{
		type: String,
		require: true,
		minlength: 1,
		trim: true
		//trim用来移除string前面和后面的space		
	},
	completed:{
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

module.exports = {Todo};


//make a new instance about todo database
// var newTodo = new Todo({
// 	text: 'Hi there',
// 	completed: false,
// 	completedAt: new Date()
// });

// //save to the database
// newTodo.save().then((doc)=>{
// 	console.log(JSON.stringify(doc, undefined, 2))
// },(e)=>{
// 	console.log('unable to save todo')
// });