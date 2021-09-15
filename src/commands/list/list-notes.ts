import chalk from 'chalk';
import {loadNotes, formatBody} from '../../tools/notes';

export function listNotes() {
  const notes = loadNotes();

  console.log(`Listing Notes`);
  for (const note of notes) {
    console.log(formatListRow(note.title, note.body));
  }
}

function formatListRow(title: string, body: string) {
  body = formatBody(body);
  title = chalk.cyanBright(`${title}:`);

  /** Total Max Length = 85 */
  const maxLength = 82;
  const row = `${title} ${body}`;
  const formattedRow = `${row.substring(0, maxLength).trim()}...`;

  return row.length < maxLength ? row : formattedRow;
}
