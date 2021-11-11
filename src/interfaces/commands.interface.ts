export interface Command {
  name: string,
  alias?: string,
  desc: string | false,
  handler(arg: any): any,
}

export interface CommandObj {
  [x: string]: Command
}
