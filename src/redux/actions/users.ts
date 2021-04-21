import { createAction } from 'redux-actions';

import {
  ADD_GITUSERS,
  USER_DETAILS
} from './constants';

export const addgitUsers = createAction(ADD_GITUSERS);
export const userDetailsAction = createAction(USER_DETAILS);
