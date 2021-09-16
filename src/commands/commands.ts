import {CommandObj} from '../interfaces/commands.interface';
import {handleEdit} from './edit';
import {listNotes} from './list/list-notes';
import {handleRead} from './read';
import {handleRemove} from './remove';
import {handleAdd} from './add';

export const commands: CommandObj = {
  add: {name: 'add', desc: 'Adds a new note', handler: handleAdd},
  list: {name: 'list', desc: 'Lists all notes', handler: listNotes},
  read: {name: 'read', desc: 'Reads a note', handler: handleRead},
  remove: {name: 'remove', desc: 'Removes a note', handler: handleRemove},
  edit: {name: 'edit', desc: 'Edits a note', handler: handleEdit},
};
