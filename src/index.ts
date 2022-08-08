import { Shell, ShellOptions } from './shell';
import { IFileSystem } from './fs';

export namespace ash {
    export function create(
        fs: IFileSystem,
        options: ShellOptions
    ) {
        return new Shell(options, fs);
    }
}

export * from './fs';
