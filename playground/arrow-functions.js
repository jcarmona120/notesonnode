var square = x => x * x;

var user = {
	name: 'Jawann',
	sayHi: () => {
		//No this binding in ES6 arrow function
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {
		//Remove colon in ES6 arrow function for Object Literals
		console.log(`Hi. I'm ${this.name}`);
	}
}

console.log(square(5))
user.sayHiAlt()