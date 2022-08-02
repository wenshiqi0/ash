import { Disposable, IDisposable } from './dispose';

export interface EventCallback<T> {
  (params: T): void;
}

export interface EventSubscription<T> {
  (callback: EventCallback<T>): IDisposable;
}

export class EventEmitter<T> extends Disposable {
  // @ts-ignore
  private _event: EventSubscription<T> = null;
  private _callbackList: EventCallback<T>[] = [];
  private _symbol: Symbol;

  constructor(name?: string) {
    super();
    this._symbol = Symbol(name || 'event-emitter-uniq');
  }

  get event() {
    if (this._event === null) {
      this._event = (callback: EventCallback<T>) => {
        this._callbackList.push(callback);
        return {
          dispose: () => {
            const index = this._callbackList.findIndex((c) => c === callback);
            this._callbackList.splice(index, 1);
          },
        };
      }
    }
    return this._event;
  }

  get symbol() {
    return this._symbol;
  }

  emit(params: T) {
    this._callbackList.forEach(callback => {
      callback.call(null, params);
    });
  }

  equal(event: EventEmitter<T>) {
    return event.symbol === this.symbol;
  }
}
