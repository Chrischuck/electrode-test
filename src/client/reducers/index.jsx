import { combineReducers } from 'redux';

import home from './home'

export default function createReducer(asyncReducers) {
  return combineReducers({
    home
  });
}