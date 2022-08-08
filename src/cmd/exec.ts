import { ICommand, CommandOptions, Executor } from './common';

export class Exec implements ICommand {
  constructor(
    private _options: CommandOptions,
  ) { }

  get options() {
    return { ...this._options };
  }

  exec() {
    const binary = this._options.source;
    return new Promise<number>((resolve, reject) => {
      WebAssembly.instantiate(binary, {
      }).then((res) => {
        // force to cast
        const executor = res.instance.exports as any as Executor;
        resolve(executor._start());
      }).catch(e => reject(e));
    })
  }
}