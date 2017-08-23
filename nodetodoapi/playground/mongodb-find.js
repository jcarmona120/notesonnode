const { MongoClient, ObjectID } = require('mongodb') 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server')

	// db.collection('Todos').find({
	// 	_id: new ObjectID('599d9cf4acc62097c6c417d9')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2))
	// }, (err) => {	
	// 	console.log('Unable to fetch todos', err)
	// })

	db.collection('Users').find({
		name: 'Jawann'
	}).forEach((doc) => {
		// console.log(`Todos count: ${count}`);
		console.log(`Boom ${doc}`)
		console.log(JSON.stringify(doc, undefined, 2))
	})

	// db.close();
})