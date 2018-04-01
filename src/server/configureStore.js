import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createReducer from '../client/reducers'

export default function configureStore(initialState) {
  return createStore(createReducer(), initialState, applyMiddleware(
      thunkMiddleware,
    ));
}
