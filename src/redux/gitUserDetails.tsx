import { createSlice } from '@reduxjs/toolkit';
// page number and limit

const initialState = {
  isLoading: true,
  userDetails: [],
  userHistory: [],
  error: false,
};

const {
  actions: {
    fetchingUserDetails,
    fetchingUserDetailsFailure,
  },
  reducer,
} = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    fetchingUserDetails: (state, action) => ({
      ...initialState,
      userDetails: action && action.payload && action.payload.userData,
      userHistory: action && action.payload && action.payload.userHistory,
      isLoading: false,
    }),
    fetchingUserDetailsFailure: () => ({
      ...initialState,
      error: true,
      isLoading: false,
    }),
  },
});
export default reducer;
export {
    fetchingUserDetails,
    fetchingUserDetailsFailure,
};
