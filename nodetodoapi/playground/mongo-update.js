const { MongoClient, ObjectID } = require('mongodb') 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server')

	// db.collection('Todos').findOneAndUpdate({
	// 	completed: true
	// 	},
	// 	{
	// 		$set: {
	// 			completed: false
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	} 
	// ).then((result) => {
	// 	console.log(result)
	// })


	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("599d9ff40ad728a17c0d172f")
		},
		{
			$inc: {
				age: 1 
			}
		}, {
			returnOriginal: false
		} 
	).then((result) => {
		console.log(result)
	})

	db.close();
})