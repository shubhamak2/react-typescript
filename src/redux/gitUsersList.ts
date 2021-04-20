import { createSlice } from '@reduxjs/toolkit';
// page number and limit

const initialState = {
  isLoading: true,
  error: false,
  customerList: [],
  pageNumber: 1,
};

const {
  actions: {
    fetchgitUsersListStart,
    fetchgitUsersListSuccess,
    fetchgitUsersListFailure,
    fetchPaginatedUsersList,
  },
  reducer,
} = createSlice({
  name: 'customerList',
  initialState,
  reducers: {
    fetchgitUsersListStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    fetchgitUsersListSuccess: (state, action) => ({
      ...initialState,
      customerList: action && action.payload && action.payload.customerData,
      isLoading: false,
    }),
    fetchgitUsersListFailure: () => ({
      ...initialState,
      error: true,
      isLoading: false,
    }),
    fetchPaginatedUsersList: (state, action) => ({
      ...initialState,
      isLoading: false,
      customerList: action.payload.customerData,
      pageNumber: state.pageNumber + 1,
    }),
  },
});
export default reducer;
export {
  fetchgitUsersListStart,
  fetchgitUsersListSuccess,
  fetchgitUsersListFailure,
  fetchPaginatedUsersList,
};
