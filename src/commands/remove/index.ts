import yargs = require('yargs');

import {removeNote} from './remove-note';

export function configureRemoveCommand() {
  yargs.command('remove [title]', 'Removes a note', buildRemove, handleRemove);
}

function buildRemove() {
  yargs.option('title', {
    alias: 't',
    describe: 'Note title',
    type: 'string',
    demandOption: true,
  });
}

function handleRemove(argv: any) {
  removeNote(argv.title);
}
