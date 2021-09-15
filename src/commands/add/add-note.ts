import chalk from 'chalk';
import {loadNotes, saveNote} from '../../tools/notes';
import {isValidTitle, isNotDuplicateNote} from '../../tools/validations';

export function addNote(title: string, body: string) {
  const validMessageOrValue = isValidTitle(title);
  if ('boolean' === typeof validMessageOrValue) {
    const notes = loadNotes();
    const duplicateNoteMessage = isNotDuplicateNote(notes, title);
    if ('boolean' === typeof duplicateNoteMessage) {
      // This should be the function
      notes.push({title, body});
      saveNote(notes);
      console.log(`Note added`);
      console.log(`Title: ${chalk.cyanBright.bold(title)}`);
      console.log(`Body: ${chalk.bgBlack.whiteBright(body)}`);
    } else {
      console.log(chalk.yellow(duplicateNoteMessage));
    }
  } else {
    console.log(chalk.red(validMessageOrValue));
  }
}
