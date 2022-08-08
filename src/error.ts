export enum Errors {
  BINARY_COMMAND_NOT_LOAD,
}

export function ferror(err: Errors): Error {
  return new Error(err.toString());
}
