import { Errors, ferror } from './error';

export interface CommandOptions {
  source: ArrayBuffer | URL;
  nofork: boolean;
  args: string[];
}

export interface ICommand {
  options: CommandOptions;
  load: () => Promise<void>;
  exec: () => Promise<number>;
}

export interface Executor {
  _start: () => number;
}

export class Exec implements ICommand {
  private binary: ArrayBuffer | undefined;

  constructor(
    private _options: CommandOptions,
  ) { }

  get options() {
    return this._options;
  }

  async load(): Promise<void> {
    if (this._options.source instanceof URL) {
      const res = await fetch(this._options.source);
      this.binary = await res.arrayBuffer();
    } else {
      this.binary = this._options.source;
    }
  }

  exec() {
    if (!this.binary) {
      throw ferror(Errors.BINARY_COMMAND_NOT_LOAD);
    } else {
      const binary = this.binary;
      return new Promise<number>((resolve, reject) => {
        WebAssembly.instantiate(binary, {
        }).then((instanceSource) => {
          const executor = instanceSource.instance.exports as any as Executor;
          resolve(executor._start());
        }).catch(e => reject(e));
      })
    }
  }
}

export class Fork implements ICommand {
  constructor(
    private _options: CommandOptions,
  ) { }

  get options() {
    return this._options;
  }

  load(): Promise<void> {
    return Promise.resolve();
  }

  exec() {
    return Promise.resolve(0);
  }
}
