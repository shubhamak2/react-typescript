import { createSlice } from '@reduxjs/toolkit';
// page number and limit

interface State {
  isLoading: boolean;
  error: boolean;
  userList: any;
  pageNumber: number;
  isLoadingMore: boolean;
}

const initialState = {
  isLoading: true,
  error: false,
  userList: [],
  pageNumber: 1,
  isLoadingMore: true,
};

const {
  actions: {
    fetchGitUsersListStart,
    fetchGitUsersListSuccess,
    fetchGitUsersListFailure,
    fetchPaginatedUsersList,
  },
  reducer,
} = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    fetchGitUsersListStart: () => ({
      ...initialState,
      isLoading: true,
    }),
    fetchGitUsersListSuccess: (state: State, action) => ({
      ...initialState,
      userList: action && action.payload && action.payload.userData,
      isLoading: false,
    }),
    fetchGitUsersListFailure: () => ({
      ...initialState,
      error: true,
      isLoading: false,
    }),
    fetchPaginatedUsersList: (state, action) => ({
      ...initialState,
      isLoading: false,
      userList: action.payload.userData,
      pageNumber: state.pageNumber + 1,
    }),
  },
});
export default reducer;
export {
  fetchGitUsersListStart,
  fetchGitUsersListSuccess,
  fetchGitUsersListFailure,
  fetchPaginatedUsersList,
};
