import yargs from 'yargs';
import {promptCommands} from '../../tools/prompts';
import {commands} from '../commands';

export function configureDefaultCommand() {
  yargs.command(
    '$0',
    false,
    buildDefault,
    handleDefault,
  );
}

function buildDefault() {
  yargs.option('title', {
    alias: 't',
    describe: 'Note title',
    type: 'string',
    demandOption: false,
  });

  yargs.option('body', {
    alias: 'b',
    describe: 'Note content',
    type: 'string',
    demandOption: false,
  });
}

async function handleDefault(argv: any) {
  await promptCommands(argv);
  commands[argv.command].handler(argv);
}
