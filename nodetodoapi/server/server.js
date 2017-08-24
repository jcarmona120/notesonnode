const express = require('express')
const bodyParser = require('body-parser')


var { mongoose, validator } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User} = require('./models/users')

var app = express()

app.use(bodyParser.json())

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos})
	}, (e) => {
		res.status(400).send(e)
	})
})

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc)
	}, (e) => {
		res.status(400).send(e)
	})
})


app.listen(3000, () => {
	console.log('Go to 3000!')
})

module.exports = {
	app
}