import api from '../es';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import './index.css';

const term = new Terminal({
    convertEol: true,
});
const root = document.getElementById('root');

if (root) {
    term.open(root);
    const shell = api.create({
        env: {
            "HOME": "/",
            "PWD": "/",
            "PATH": "/usr/bin",
            "SHELL": "tsh",
            "PS1": "\\u@\\h \\@ \\$ ",
        }
    });

    shell.onStdout((buff) => {
        term.write(new Uint8Array(buff));
    })

    shell.onStderr((buff) => {
        term.write(new Uint8Array(buff));
    })

    // 处理进程通信
    term.onKey(({ key, domEvent }) => {
        switch (domEvent.key) {
            default:
                shell.write(key);
                break;
        }
    })

    // 处理前端渲染
    term.onKey(({ key, domEvent }) => {
        switch (domEvent.key) {
            default:
                term.write(key);
                break;
        }
    })

    shell.start();
}
