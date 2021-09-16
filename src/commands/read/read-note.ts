import chalk from 'chalk';
import {loadNotes, formatBody} from '../../tools/notes';

export function readNote(title: string) {
  const notes = loadNotes();
  const noteToBeRead = notes.find((notesObject) => notesObject.title === title);
  if (noteToBeRead) {
    const fTitle = chalk.cyanBright(noteToBeRead.title);
    const fBody = formatBody(noteToBeRead.body);

    console.log(`\n${fTitle}\n${fBody}`);
  } else {
    console.log(chalk.yellow(`Note "${chalk.bold(title)}" not found`));
  }
}
