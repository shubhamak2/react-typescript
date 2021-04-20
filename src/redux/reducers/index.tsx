import { combineReducers } from '@reduxjs/toolkit';

import CustomerListReducer from './gitUsersList';

const rootReducer = combineReducers({
  customerList: CustomerListReducer,
});

export default rootReducer;
