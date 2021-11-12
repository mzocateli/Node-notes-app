import chalk = require('chalk');
import yargs = require('yargs');
import {configureDefaultCommand} from './commands/_default';
import {configureAddCommand} from './commands/add';
import {configureEditCommand} from './commands/edit';
import {configureListCommand} from './commands/list';
import {configureReadCommand} from './commands/read';
import {configureRemoveCommand} from './commands/remove';
import {pathToNotebook} from './tools/notes';
import {NOTES_APP_VERSION} from './tools/package-version';

const asciiText = `
    _   __         __               
   / | / / ____   / /_  ___    _____
  /  |/ / / __ \\ / __/ / _ \\  / ___/
 / /|  / / /_/ // /_  /  __/ (__  ) 
/_/ |_/  \\____/ \\__/  \\___/ /____/  
`;

/**
 * Configures the Arguments, Handlers and Builders of each Command
 */
function configureCommands() {
  configureListCommand();
  configureReadCommand();
  configureRemoveCommand();
  configureAddCommand();
  configureEditCommand();
  configureDefaultCommand();
}

/**
 * Handles arguments using yargs
 */
export async function configureAndExecuteYargs() {
  console.log(chalk.green(asciiText));
  console.log(`Version: ${chalk.green(NOTES_APP_VERSION)}\n`);

  yargs.strict(false);
  yargs.locale('en');
  yargs.version(false);
  yargs.alias('h', 'help');
  yargs.showHelpOnFail(true);
  yargs.epilogue(`Storage:\n  Notes will be stored in ${chalk.cyanBright(pathToNotebook)}`);
  configureCommands();

  yargs.parse();
}

configureAndExecuteYargs();
