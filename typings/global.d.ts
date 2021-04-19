import { Store as ReduxStore } from 'redux';

declare global {
  interface Store {}

  interface Window {
    store?: ReduxStore<Store>;
  }
}
