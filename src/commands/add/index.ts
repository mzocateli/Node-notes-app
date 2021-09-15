import yargs = require('yargs');
import {Note} from '../../interfaces/note.interface';
import {addNote} from './add-note';


export function configureAddCommand() {
  yargs.command('add [title] [body]', 'Adds a new note', buildAdd, handleAdd);
}

function buildAdd() {
  yargs.option('title', {
    alias: 't',
    describe: 'New note title',
    type: 'string',
    demandOption: true,
  });

  yargs.option('body', {
    alias: 'b',
    describe: 'New note content',
    type: 'string',
    demandOption: true,
  });
}

function handleAdd(argv: Note) {
  addNote(argv.title, argv.body);
}
