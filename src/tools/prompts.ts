import chalk from 'chalk';
import {prompt} from 'enquirer';
import {isValidTitle} from './validations';

export async function promptCommands(args: any) {
  return prompt({
    type: 'select',
    name: 'command',
    message: 'What would you like todo do?',
    choices: [
      {message: 'Add:    ', hint: 'add a new note', name: 'add'},
      {message: 'List:   ', hint: 'list all existing notes', name: 'list'},
      {message: 'Read:   ', hint: 'read an especific note', name: 'read'},
      {message: 'Remove: ', hint: 'remove a note', name: 'remove'},
      {message: 'Edit:   ', hint: 'edit a notes body', name: 'edit'},
    ],
  }).then((answer: any) => args.command = answer.command)
    .catch(() => {
      throw Error('Failed prompting commands');
    });
}

export async function promptTitle(args: any) {
  if (!args.title) {
    return prompt({
      type: 'input',
      name: 'title',
      message: 'What is the note\'s title?',
      validate: isValidTitle,
    }).then((answer: any) => args.title = answer.title)
      .catch(() => {
        throw Error('Failed prompting title');
      });
  }
}

export async function promptBody(args: any) {
  if (!args.body) {
    return prompt({
      type: 'input',
      name: 'body',
      message: 'What is the note\'s body?',
    }).then((answer: any) => args.body = answer.body)
      .catch(() => {
        throw Error(chalk.red('Failed prompting body'));
      });
  }
}
