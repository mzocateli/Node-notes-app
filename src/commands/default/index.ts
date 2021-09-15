import yargs from 'yargs';

// TODO: Fluxo de prompts

export function configureDefaultCommand() {
  yargs.command(
    '$0',
    false,
    ()=> {},
    () => {
      console.log('Comando vazio!');
    },
  );
}
