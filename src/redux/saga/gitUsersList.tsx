import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  ADD_GITUSERS,
} from '../actions/constants';
import {
  fetchPaginatedUsersList,
  fetchgitUsersListStart,
  fetchgitUsersListSuccess,
} from '../reducers';
import { fetchData, fetchPaginatedData } from '../services/userListApi';

function* gitUsersListWatcher() {
  yield takeLatest([
    fetchgitUsersListStart.type,
    ADD_GITUSERS], gitUsersListWorker);
}
function* gitUsersListWorker(action: any): any {
  try {
    switch (action.type) {
      case fetchgitUsersListStart.type: {
        const data = yield call(fetchData);
        yield put(fetchgitUsersListSuccess({ customerData: data }));
        break;
      }

      case ADD_GITUSERS: {
        const { pageNumber } = yield select(state => state.customerList);
        const { customerList } = yield select(state => state.customerList);
        const clonedCustomerList = JSON.parse(JSON.stringify(customerList));
        const data = yield call(fetchPaginatedData, { pageNumber });
        const array3 = clonedCustomerList.concat(data);
        yield put(fetchPaginatedUsersList({ customerData: array3 }));
        break;
      }
      default:
        break;
    }
  } catch (err) {
    console.error(`Error occuring while calling an action ${action.type}`, err);
  }
}

export default gitUsersListWatcher;
