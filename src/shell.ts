import { EventEmitter } from './event';
import { stringToUtf8ArrayBuffer } from './string';

export interface ShellOptions {
    env?: { [key: string]: string },
}

export class Shell {
    private _options: ShellOptions;
    // private _stdin = new EventEmitter<ArrayBuffer>();
    private _stdout = new EventEmitter<ArrayBuffer>();
    private _stderr = new EventEmitter<ArrayBuffer>();

    private _command: string = '';

    private writeStderr(content: string) {
        this._stdout.emit(typeof content === 'string' ? stringToUtf8ArrayBuffer(content) : content);
    }

    private prompt() {
        // TODO: 支持 PS1 和 PS2 环境变量
        this.writeStderr('Ash-0.0.1$ ');
    }

    private newline() {
        this.writeStderr('\r\n');
    }

    private getEnv(key: string): string {
        return (this.env || {})[key] || '';
    }

    private isBuildIn(command: string) {
        // TODO: 支持更多常用 buildin 命令
        return [
            "cd",
            "pwd",
        ].indexOf(command) > -1;
    }

    private execBuildInCommand(command: string) {
        switch (command) {
            case 'pwd':
                this.newline();
                this.writeStderr(this.getEnv('PWD'));
                break;
            default:
                break;
        }
    }

    private async exec(command: string) {
        if (command) {
            if (this.isBuildIn(command)) {
                this.execBuildInCommand(command);
            } else {
                // TODO: 尝试调用支持 wasi 的 wasm 应用
            }
        }
    }

    constructor(options: ShellOptions) {
        this._options = options;
        console.log(this.env);
    }

    start() {
        this.prompt();
    }

    get env() {
        return { ...this._options.env };
    }

    get onStdout() {
        return this._stdout.event;
    }

    get onStderr() {
        return this._stderr.event;
    }

    write(input: string) {
        switch (input) {
            case '\r':
                const command = this._command;
                this._command = '';
                this.exec(command).then(() => {
                    this.newline();
                    setTimeout(() => {
                        this.prompt();
                    }, 0);
                })
                break;
            default:
                this._command += input;
                break;
        }
    }
}
