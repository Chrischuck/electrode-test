import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = (s, a) => s

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(
      thunkMiddleware,
    ));
}
