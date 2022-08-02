import { Shell, ShellOptions } from './shell';

export default {
    create: (options: ShellOptions) => {
        return new Shell(options);
    },
}

export type { Shell, ShellOptions } from './shell';
