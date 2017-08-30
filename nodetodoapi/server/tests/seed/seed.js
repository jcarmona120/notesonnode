const { ObjectID } = require('mongodb')
const { Todo } = require('./../../models/todo')
const { User } = require('./../../models/user')
const jwt = require('jsonwebtoken')

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
 	_id: userOneId,
 	email: "jawannthedon@example.com",
 	password: "password1",
 	tokens: [{
 		access: 'auth',
 		token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
 	}]
}, {
  _id: userTwoId,
  email: "jawannthespawn@example.com",
  password: "password2"
}];

const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save()
		var userTwo = new User(users[1]).save()

		return Promise.all([userOne, userTwo])
	}).then(() => done())
}

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  completedAt: 333,
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};



module.exports = { todos, users, populateUsers, populateTodos}