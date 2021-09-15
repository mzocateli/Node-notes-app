import chalk from 'chalk';
import {existsSync, readFileSync, writeFileSync} from 'fs';
import {homedir} from 'os';
import {join} from 'path';
import {Notebook} from '../interfaces/note.interface';

export const pathToNotebook = join(
  homedir(), 'notes-app.json',
);

export function loadNotes() {
  if (!existsSync(pathToNotebook)) writeFileSync(pathToNotebook, '[]', {});
  const notebookFile = readFileSync(pathToNotebook, {encoding: 'utf-8'});
  const objNotebookFile: Notebook = JSON.parse(notebookFile);
  return objNotebookFile;
}

export function saveNote(newNotesObject: Notebook) {
  writeFileSync(pathToNotebook, JSON.stringify(newNotesObject, null, '  '));
}

export function formatBody(body: string) {
  return body !== '' ? body : chalk.blackBright('null');
}
