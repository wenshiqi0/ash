import { ICommand, CommandOptions } from './common';

export class Fork implements ICommand {
  constructor(
    private _options: CommandOptions,
  ) { }

  get options() {
    return { ...this._options };
  }

  exec() {
    return Promise.resolve(0);
  }
}
