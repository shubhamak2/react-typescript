import { all } from 'redux-saga/effects';

import gitUsers from './gitUsers';

export default function* rootSaga() {
  yield all([
    gitUsers(),
  ]);
}
