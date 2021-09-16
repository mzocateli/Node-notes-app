import yargs = require('yargs');
import {Note} from '../../interfaces/note.interface';
import {promptTitle, promptBody} from '../../tools/prompts';
import {commands} from '../commands';
import {editNote} from './edit-note';


export function configureEditCommand() {
  yargs.command(
    `${commands['edit'].name} [title] [body]`,
    `${commands['edit'].desc}`,
    buildEdit,
    handleEdit,
  );
}

function buildEdit() {
  yargs.option('title', {
    alias: 't',
    describe: 'Note title',
    type: 'string',
    demandOption: false,
  });

  yargs.option('body', {
    alias: 'b',
    describe: 'New content',
    type: 'string',
    demandOption: false,
  });
}

// TODO: Otimizar callbacks
export function handleEdit(argv: Note) {
  promptTitle(argv).then(() => {
    promptBody(argv).then(() => {
      editNote(argv.title, argv.body);
    }, (err) => {
      console.log(err.message);
    });
  });
}
