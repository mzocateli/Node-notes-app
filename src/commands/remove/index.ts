import yargs = require('yargs');
import {promptTitle} from '../../tools/prompts';
import {commands} from '../commands';

import {removeNote} from './remove-note';

export function configureRemoveCommand() {
  yargs.command(
    `${commands['remove'].name} [title]`,
    `${commands['remove'].desc}`,
    buildRemove,
    handleRemove,
  );
}

function buildRemove() {
  yargs.option('title', {
    alias: 't',
    describe: 'Note title',
    type: 'string',
    demandOption: false,
  });
}

// TODO: Otimizar callbacks
export function handleRemove(argv: any) {
  promptTitle(argv).then(() => {
    removeNote(argv.title);
  }, (err) => {
    console.log(err.message);
  });
}
