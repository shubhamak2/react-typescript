import { combineReducers } from 'redux';

export default combineReducers<Store>({
  example: (state: Store = {}) => state,
});
