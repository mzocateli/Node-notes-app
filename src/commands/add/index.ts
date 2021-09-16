import yargs = require('yargs');
import {Note} from '../../interfaces/note.interface';
import {promptBody, promptTitle} from '../../tools/prompts';
import {commands} from '../commands';
import {addNote} from './add-note';

export function configureAddCommand() {
  yargs.command(
    `${commands['add'].name} [title] [body]`,
    `${commands['add'].desc}`,
    buildAdd,
    handleAdd,
  );
}

function buildAdd() {
  yargs.option('title', {
    alias: 't',
    describe: 'New note title',
    type: 'string',
    demandOption: false,
  });

  yargs.option('body', {
    alias: 'b',
    describe: 'New note content',
    type: 'string',
    demandOption: false,
  });
}

export function handleAdd(argv: Note) {
  promptTitle(argv).then(() => {
    promptBody(argv).then(() => {
      addNote(argv.title, argv.body);
    });
  }).catch((err) => console.log(err.message));
}
