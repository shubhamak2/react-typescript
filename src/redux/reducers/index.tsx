import { combineReducers } from '@reduxjs/toolkit';

import CustomerListReducer from '../gitUsersList';
import UserDetailsReducer from '../gitUserDetails';

const rootReducer = combineReducers({
  customerList: CustomerListReducer,
  userDetails: UserDetailsReducer

});

export default rootReducer;
