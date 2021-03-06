import configureStore from "../../configureStore";
import Promise from 'bluebird'

import rootReducer from "../../../client/reducers";
import * as actions from '../../../client/actions'


// WOOOOW NO BABEL
module.exports = function createReduxStore(req) {
  console.log(req)
  // need a "from other route"
  const initialState = {
    home: {
      url: null
    }
  }

  const store = configureStore(initialState);

  return Promise.all([

    store.dispatch(actions.getDogPic())

  ])
  .then(() => store);
}