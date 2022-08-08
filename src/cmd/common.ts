export interface CommandOptions {
  source: ArrayBuffer;
  args: string[];
}

export interface ICommand {
  options: CommandOptions;
  exec: () => Promise<number>;
}

export interface Executor {
  _start: () => number;
}
