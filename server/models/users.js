var mongoose = require('mongoose');
var user = mongoose.model('USER',{
	email: {
		type: String,
		require: true,
		minlength: 1,
		trim: true
	}
})


module.exports = {user};


//make a new instance about users database
// var newUser = new user({
// 	email: 'lyldaniel96@gmail.com',
// 	completed:false,
// });

// //pass the data to the database
// newUser.save().then((doc)=>{
// 	console.log(JSON.stringify(doc, undefined, 2))
// },(e)=>{
// 	console.log('Unable to add to mongodb');
// })

