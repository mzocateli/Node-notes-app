import yargs = require('yargs');
import {Note} from '../../interfaces/note.interface';
import {promptTitle} from '../../tools/prompts';
import {commands} from '../commands';

import {readNote} from './read-note';

export function configureReadCommand() {
  yargs.command(
    `${commands['read'].name} [title]`,
    `${commands['read'].desc}`,
    buildRead,
    handleRead,
  );
}

function buildRead() {
  yargs.option('title', {
    alias: 't',
    describe: 'Note title',
    type: 'string',
    demandOption: false,
  });
}

// TODO: Otimizar callbacks
export function handleRead(argv: Pick<Note, 'title'>) {
  promptTitle(argv).then(() => {
    readNote(argv.title);
  }, (err) => {
    console.log(err.message);
  });
}
