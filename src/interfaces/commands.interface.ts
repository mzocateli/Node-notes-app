export interface Command {
  name: string,
  alias?: string,
  desc: string | false,
  handler: (...{}: any) => any,
}

export interface CommandObj {
  [x: string]: Command
}
