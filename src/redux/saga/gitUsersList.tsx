import { call, put, select, takeLatest, all } from "redux-saga/effects";

import { ADD_GITUSERS, USER_DETAILS } from "../actions/constants";
import {
  fetchPaginatedUsersList,
  fetchgitUsersListStart,
  fetchgitUsersListSuccess,
} from "../gitUsersList";
import {
  fetchData,
  fetchPaginatedData,
  fetchUserDetails,
  fetchUserHistory,
} from "../services/userListApi";
import { fetchingUserDetails } from "../gitUserDetails";
function* gitUsersListWatcher() {
  yield takeLatest(
    [fetchgitUsersListStart.type, ADD_GITUSERS, USER_DETAILS],
    gitUsersListWorker
  );
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
        const { customerList } = yield select((state) => state.customerList);
        const [lastItem] = customerList.slice(-1);
        const { id } = lastItem;
        const clonedCustomerList = JSON.parse(JSON.stringify(customerList));
        const data = yield call(fetchPaginatedData, { id });
        const array3 = clonedCustomerList.concat(data);
        yield put(fetchPaginatedUsersList({ customerData: array3 }));
        break;
      }

      case USER_DETAILS: {
        const { username } = action.payload;
        const [userdetails, userhistory] = yield all([
          call(fetchUserDetails, { username }),
          call(fetchUserHistory, { username }),
        ]);
        const newUserHistory = userhistory.filter(
          (user: any) => user.type == "PullRequestEvent"
        );
        yield put(
          fetchingUserDetails({
            userData: userdetails,
            userHistory: newUserHistory,
          })
        );
      }
      default:
        break;
    }
  } catch (err) {
    console.error(`Error occuring while calling an action ${action.type}`, err);
  }
}

export default gitUsersListWatcher;
