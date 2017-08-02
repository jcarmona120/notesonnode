const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleArg = {
	title: {
			describe: 'Title of Note',
			demand: true,
			alias: 't'
		}
}

const bodyArg = {
	body: {
		describe: 'Body of Note',
			demand: true,
			alias: 'b'
	}
}

const argv = yargs
	.command('add', 'Add a new note', {
		titleArg,
		body: {
			describe: 'Body of Note',
			demand: true,
			alias: 'b'
		}	
	})
	.command('list', 'List All Notes')
	.command('read', 'Read Specific Note', titleArg	)
	.command('remove', 'Remove Specific Note', titleArg)
	.help()
	.argv;

var command = argv._[0];


if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
  	console.log('Note created')
  	notes.logNote(note);
  } else {
  	console.log('Note title taken')
  }

} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach((note) => notes.logNote(note))

} else if (command === 'read') {
  var note = notes.getNote(argv.title);

  if (note) {
  	notes.logNote(note);
  } else {
  	console.log('Note not found')
  }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);

} else {
  console.log('Command not recognized')
}
