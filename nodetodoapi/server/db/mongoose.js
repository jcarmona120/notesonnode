const mongoose = require('mongoose')
const validator = require('validator')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/TodoApp')

module.exports = {
	mongoose,
	validator
}