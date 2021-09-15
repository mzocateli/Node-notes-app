import yargs = require('yargs');
import {Note} from '../../interfaces/note.interface';
import {editNote} from './edit-note';


export function configureEditCommand() {
  yargs.command('edit [title] [body]', 'Edits a note', buildEdit, handleEdit);
}

function buildEdit() {
  yargs.option('title', {
    alias: 't',
    describe: 'Note title',
    type: 'string',
    demandOption: true,
  });

  yargs.option('body', {
    alias: 'b',
    describe: 'New content',
    type: 'string',
    demandOption: true,
  });
}

function handleEdit(argv: Note) {
  editNote(argv.title, argv.body);
}
