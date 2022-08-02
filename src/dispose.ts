export class Disposable implements IDisposable {
  dispose() {
    // nothing
  }
}

export interface IDisposable {
  dispose(): void;
}

export class DisposableList implements IDisposable {
  private _disposableList: Disposable[] = [];

  addDispose(disposable: IDisposable) {
    this._disposableList.push(disposable);
  }

  clear() {
    this._disposableList = [];
  }

  dispose() {
    this._disposableList.forEach((disposable) => {
      disposable.dispose();
    });
    this.clear();
  }
}
