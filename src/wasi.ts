import { u16, i32, i64 } from './number';

export interface IWASI {
  // main args
  args_get: (argv: i32, argv_buf: i32) => u16;
  args_sizes_get: (retptr0: i32, retptr1: i32) => u16;

  // environ
  environ_get: (environ: i32, environ_buf: i32) => u16;
  environ_sizes_get: (retptr0: i32, retptr1: i32) => u16;

  // time
  clock_res_get: (id: i32, retptr0: i32) => u16
  clock_time_get: (id: i32, precision: i64, retptr0: i32) => u16

  // fd file system
  fd_advise: (fd: i32, offset: i64, len: i64, advice: i32) => u16;
  fd_allocate: (fd: i32, offset: i64, len: i64) => u16;
  fd_close: (fd: i32) => u16;
  fd_datasync: (fd: i32) => u16;
  fd_fdstat_get: (fd: i32, retptr0: i32) => u16;
  fd_fdstat_set_flags: (fd: i32, flags: i32) => u16;
  fd_fdstat_set_rights: (fd: i32, fs_rights_base: i64, fs_rights_inheriting: i64) => u16;
  fd_filestat_get: (fd: i32, retptr0: i32) => u16;
  fd_filestat_set_size: (fd: i32, size: i32) => u16;
  fd_filestat_set_times: (fd: i32, atim: i64, mtim: i64, fst_flags: i32) => u16;
  fd_pread: (fd: i32, iovs: i32, iovs_len: i32, offset: i64, retptr0: i32) => u16;
  fd_prestat_get: (fd: i32, retptr0: i32) => u16;
  fd_prestat_dir_name: (fd: i32, path: i32, len: i32) => u16;
  fd_pwrite: (fd: i32, iovs: i32, iovs_len: i32, offset: i64, retptr0: i32) => u16;
  fd_read: (fd: i32, iovs: i32, iovs_len: i32, retptr0: i32) => u16;
  fd_readdir: (fd: i32, buff: i32, buf_len: i32, cookie: i64, retptr0: i32) => u16;
  fd_renumber: (from: i32, to: i32) => u16;
  fd_seek: (fd: i32, offset: i64, whence: i32, retptr0: i32) => u16;
  fd_sync: (fd: i32) => u16;
  fd_tell: (fd: i32, retptr0: i32) => u16;
  fd_write: (fd: i32, iovs: i32, iovs_len: i32, retptr0: i32) => u16;

  // path file system
  path_create_directory: (fd: i32, path: i32, path_len: i32) => u16;
  path_filestat_get: (fd: i32, flags: i32, path: i32, path_len: i32, retptr0: i32) => u16;
  path_filestat_set_times: (fd: i32, flags: i32, path: i32, path_len: i32, atim: i64, mtim: i64, fst_flags: i32) => u16;
  path_link: (old_fd: i32, old_flags: i32, old_path: i32, old_path_len: i32, new_fd: i32, new_path: i32, new_path_len: i32) => u16;
  path_open: (fd: i32, dirflags: i32, path: i32, path_len: i32, oflags: i32, fs_rights_base: i64, fs_rights_inheriting: i64, fdflags: i32, retptr0: i32) => u16;
  path_readlink: (fd: i32, path: i32, path_len: i32, buff: i32, bff_len: i32, retptr0: i32) => u16;
  path_remove_directory: (fd: i32, path: i32, path_len: i32) => u16;
  path_rename: (old_fd: i32, old_path: i32, old_path_len: i32, new_fd: i32, new_path: i32, new_path_len: i32) => u16;
  path_symlink: (old_path: i32, old_path_len: i32, fd: i32, new_path: i32, new_path_len: i32) => u16;
  path_unlink_file: (fd: i32, path: i32, path_len: i32) => u16;

  // sys
  poll_oneoff: (poll_in: i32, poll_out: i32, nsubscriptions: i32, retptr0: i32) => u16;
  proc_exit: (rval: i32) => u16;
  sched_yield: () => u16;
  random_get: (buf: i32, buf_len: i32) => u16;

  // socket
  sock_accept: (fd: i32, flags: i32, retptr0: i32) => u16;
  sock_recv: (fd: i32, ri_data: i32, ri_data_len: i32, ri_flags: i32, retptr0: i32, retptr1: i32) => u16;
  sock_send: (fd: i32, si_data: i32, si_data_len: i32, si_flags: i32, retptr0: i32) => u16;
  sock_shutdown: (fd: i32, how: i32) => u16;
}
