var mongoose = require('mongoose')
const validator = require('validator')

var User = mongoose.model('Users', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		trim: true
	}
})

module.export = {
	User, 
}