import { all } from 'redux-saga/effects';

import usersList from './gitUsersList';

export default function* rootSaga() {
  yield all([
    usersList(),
  ]);
}
