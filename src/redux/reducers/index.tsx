import { combineReducers } from '@reduxjs/toolkit';

import UserDetailsReducer from '../gitUserDetails';
import UserListReducer from '../gitUsersList';

const rootReducer = combineReducers({
  userList: UserListReducer,
  userDetails: UserDetailsReducer,
});

export default rootReducer;
