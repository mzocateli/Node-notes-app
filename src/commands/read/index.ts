import yargs = require('yargs');
import {Note} from '../../interfaces/note.interface';

import {readNote} from './read-note';

export function configureReadCommand() {
  yargs.command('read [title]', 'Reads a note', buildRead, handleRead);
}

function buildRead() {
  yargs.option('title', {
    alias: 't',
    describe: 'Note title',
    type: 'string',
    demandOption: true,
  });
}

function handleRead(argv: Pick<Note, 'title'>) {
  readNote(argv.title);
}
