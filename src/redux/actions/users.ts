import { createAction } from 'redux-actions';

import {
  ADD_MORE_USERS,
  USER_DETAILS,
} from './constants';

export const addMoreUsers = createAction(ADD_MORE_USERS);
export const userDetailsAction = createAction(USER_DETAILS);
