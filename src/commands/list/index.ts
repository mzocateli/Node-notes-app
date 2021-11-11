import yargs = require('yargs');
import {commands} from '../commands';

import {listNotes} from './list-notes';

export function configureListCommand() {
  yargs.command(
    `${commands['list'].name}`,
    `${commands['list'].desc}`,
    buildList,
    listNotes,
  );
}

function buildList() {
  // Intencionalmente vazio
}
