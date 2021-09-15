import chalk from 'chalk';
import {loadNotes, saveNote} from '../../tools/notes';

export function removeNote(title: string) {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    saveNote(filteredNotes);
    console.log(`Note ${chalk.cyanBright(title)} removed`);
  } else {
    console.log(chalk.yellow(`Note "${chalk.bold(title)}" not found`));
  }
}
