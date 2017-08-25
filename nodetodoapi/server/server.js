const express = require('express')
const bodyParser = require('body-parser')

var { mongoose, validator } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User} = require('./models/user')
const { ObjectID } = require('mongodb')

var app = express()

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos})
	}, (e) => {
		res.status(400).send(e)
	})
})

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	// Valid id using isValid
		// 404 - send back empty send
	
	if (!ObjectID.isValid(id)) {
	 	return res.status(404).send('sorry. that is not an id playa.')
	} 

	//findByid

	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send()
		}
		res.status(200).send({todo})
	}).catch((e) => res.status(404).send('not found playa'))
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


app.listen(port, () => {
	console.log(`Started up at ${port}`)
})

module.exports = {
	app
}