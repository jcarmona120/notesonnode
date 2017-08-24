const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// const id = '599eddf8bde5adf38a4adc4a'

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid')
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos)
// })

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todos', todo)
// })

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('id not found')
// 	}
// 	console.log('Todo By Id', todo)
// }).catch((e) => console.log(e))

User.findById('599eddf8bde5adf38a4adc4a').then((user) => {
	if (!user) {
		return console.log('user not found')
	} 
	console.log('User By Id', user)
}).catch((e) => console.log(e))

