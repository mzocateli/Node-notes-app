import yargs = require('yargs');

import {listNotes} from './list-notes';

export function configureListCommand() {
  yargs.command('list', 'Lists all notes', ()=>{}, listNotes);
}
