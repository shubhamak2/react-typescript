import { Store as ReduxStore, combineReducers, createStore } from 'redux';

import { root } from '../reducers';

const store: ReduxStore<Store> = createStore(
  root,
);

if (module.hot !== undefined) {
  module.hot.accept(() => {
    const nextRootReducer = combineReducers<Store>({
      ...require('../reducers/root').default,
    });

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
