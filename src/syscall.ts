/**
 * 留作后用，使用原始的系统调用
 */
export enum CLOCK_ID {
  CLOCK_REALTIME = 0,
  CLOCK_MONOTONIC = 1,
  CLOCK_PROCESS_CPUTIME_ID = 2,
  CLOCK_THREAD_CPUTIME_ID = 3
}

export interface ISyscall {
  /**
   * open and possibly create a file
   * @param path 文件名称
   * @param flags 权限控制
   * @param fdStart 文件操作符查询起始位置
   * @param fdEnd 文件操作符最大位置
   * @returns 文件操作符
   */
  syscall_open: (path: number, flags: number, fdStart?: number, fdEnd?: number) => number;
  syscall_ioctl: (fd: number, request: number, varargs: number) => number;
  syscall_write: (fd: number, buff: number, count: number) => number;
  syscall_writev: (fd: number, iov: number, iovcnt: number) => number;
  syscall_read: (fd: number, buff: number, count: number) => number;
  syscall_readv: (fd: number, iov: number, iovcnt: number) => number;
  syscall_execve: (path: number, args: number, envp: number) => number;
  syscall_lseek: (fd: number, offset: number, whence: number) => void;
  syscall_close: (fd: number) => void;
  syscall_clone: (pargs: number, size: number) => number;
  syscall_fork: () => number;
  syscall_gettid: () => void;
  syscall_set_tid_address: () => void;
  syscall_wait4: (pid: number, status: number, options: number, rusage: number) => void;
  syscall_waitid: (status: number, options: number, rusage: number) => void;
  syscall_rt_sigaction: (signum: number, act: number, oldact: number) => void;
  syscall_rt_sigprocmask: (how: number, set: number, oldset: number, sigsetsize: number) => void;
  syscall_kill: () => void;
  syscall_tkill: () => void;
  syscall_nanosleep: () => void;
  syscall_clock_nanosleep: () => void;
  syscall_geteuid: () => void;
  syscall_getpid: () => number;
  /**
   * 进入某个文件夹，并将此文件夹设置为工作路径
   * @param path 文件路径
   */
  syscall_chdir: (path: number) => number;
  syscall_setitimer: () => void;
  syscall_setsid: () => void;
  syscall_pause: () => void;
  syscall_access: () => void;
  syscall_dup: (fd: number) => void;
  syscall_dup2: (oldFd: number, newFd: number) => void;
  syscall_unlink: () => void;
  syscall_pipe: () => void;
  syscall_fstat: (fd: number, buff: number) => number;
  syscall_setrlimit: () => void;
  // syscall_uname: (utsname: number) => void;
  syscall_clock_gettime: (clockId: CLOCK_ID, res: number) => void;
  syscall_gettimeofday: (tv: number, tz: number) => void;
  syscall_settimeofday: (tv: number, tz: number) => void;
  syscall_socket: () => void;
  syscall_connect: () => void;
  syscall_sendto: () => void;
  syscall_exit_group: () => void;
  /**
   * 退出进程
   * @param 进程结束码
   */
  syscall_exit: (status: number) => void;
  syscall_umask: () => void;
  syscall_fstatat: () => void;
  syscall_stat: (path: number, size: number, buf: number) => void;
  syscall_lstat: () => void;
  syscall_mknod: () => void;
  syscall_select: (nfds: number, readfds: number, writefds: number, exceptfds: number, timeout: number) => void;
  syscall_getdents: (fd: number, dirp: number, count: number) => number;
  syscall_sched_getaffinity: () => void;
  syscall_sysinfo: () => void;
  /**
   * 获取当前工作路径
   * @param 文件路径返回指针
   * @param 文件路径返回指针所能包含的最大字节数
   * @param 实际文件路径的字节数
   */
  syscall_getcwd: (buf: number, size: number) => number;
  syscall_sendmsg: () => void;
  /**
   * 创建一个新的文件夹
   * @param 文件路径
   * @mode 创建参数
   * @returns 
   */
  syscall_mkdir: (path: number, mode: number) => number;

  syscall_futex: () => void;

  syscall_bind: () => void;

  syscall_fchownat: () => void;

  syscall_faccessat: () => void;

  syscall_faccessat2: () => void;

  syscall_getegid: () => void;

  syscall_fchmod: () => void;

  syscall_getgid: () => void;

  syscall_getgroups: () => void;

  syscall_getpeername: () => void;

  syscall_getpgid: () => void;

  syscall_getppid: () => void;

  syscall_getrandom: (buf: number, buflen: number, flags: number) => void;

  syscall_getrusage: () => void;

  syscall_getsockname: () => void;

  syscall_pipe2: () => void;

  syscall_poll: () => void;

  syscall_setpgid: () => void;

  syscall_setgid: () => void;

  syscall_setuid: (uid: number) => number;

  syscall_getuid: () => number;

  syscall_pselect6: (nfds: number, readfds: number, writefds: number, exceptfds: number, timeout: number, sigmask: number) => void;

  syscall_set_robust_list: () => void;

  syscall_readlink: () => void;

  syscall_recvfrom: () => void;

  syscall_rename: () => void;

  syscall_setsockopt: () => void;

  syscall_chmod: () => void;

  syscall_chroot: () => void;

  syscall_clock_getres: () => void;

  syscall_clock_settime: () => void;

  syscall_setregid: () => void;

  syscall_setreuid: () => void;

  syscall_fchdir: () => void;

  syscall_fchmodat: () => void;

  syscall_openat: () => void;

  syscall_fchown: () => void;

  syscall_fsync: () => void;

  syscall_ftruncate: () => void;

  syscall_getitimer: () => void;

  syscall_getpriority: () => void;

  syscall_getsid: () => void;

  syscall_link: () => void;

  syscall_linkat: () => void;

  syscall_mkdirat: () => void;

  syscall_pread: () => void;

  syscall_pwrite: () => void;

  syscall_readlinkat: () => void;

  syscall_renameat: () => void;

  syscall_rmdir: () => void;

  syscall_sched_get_priority_max: () => void;

  syscall_sched_get_priority_min: () => void;

  syscall_sched_yield: () => void;

  syscall_sendfile: () => void;

  syscall_setresgid: () => void;

  syscall_setresuid: () => void;

  syscall_setpriority: () => void;

  syscall_sigaltstack: () => void;

  syscall_rt_sigpending: () => void;

  syscall_rt_sigtimedwait: () => void;

  syscall_statfs: () => void;

  syscall_fstatfs: () => void;

  syscall_symlink: () => void;

  syscall_symlinkat: () => void;

  syscall_sync: () => void;

  syscall_times: () => void;

  syscall_truncate: () => void;

  syscall_unlinkat: () => void;

  syscall_utimensat: () => void;
}