import configureStore from "../../configureStore";
import Promise from 'bluebird'

import rootReducer from "../../../client/reducers";
import * as actions from '../../../client/actions'


// WOOOOW NO BABEL
module.exports = function createReduxStore(req) {
  const initialState = {
    default: false
  }

  const store = configureStore(initialState);

  return Promise.all([

    store.dispatch(actions.getDogPic())

  ])
  .then(() => store);
}