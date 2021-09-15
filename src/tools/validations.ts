import chalk from 'chalk';

import {Notebook} from '../interfaces/note.interface';

export function isValidTitle(title: string): boolean | string {
  if (!title) {
    return 'Title can\'t be null';
  }
  if (title.length < 2) {
    return 'Note title should have at least 2 characters';
  }
  if (title.length > 30) {
    return 'Name shouldn\'t be bigger than 30';
  }
  return true;
}

export function isNotDuplicateNote(obj: Notebook, title: string): boolean | string {
  const foundDuplicate = obj.find((obj) => obj.title === title);
  if (foundDuplicate) {
    return `Note ${chalk.bold(title)} already exists`;
  }
  return true;
}
