import chalk from 'chalk';
import {loadNotes, saveNote, formatBody} from '../../tools/notes';

export function editNote(title: string, newBody: string) {
  const notes = loadNotes();
  const noteToBeEdittedIndex = notes.findIndex(
    (notesObject) => notesObject.title === title);
  if (noteToBeEdittedIndex !== -1) {
    notes[noteToBeEdittedIndex].body = newBody;
    saveNote(notes);
    // eslint-disable-next-line max-len
    console.log(`\nNote ${chalk.cyanBright(title)} editted with body:\n${formatBody(newBody)}`);
  } else {
    console.log(chalk.yellow(`Note "${chalk.bold(title)}" not found`));
  }
}
