import configureStore from "../../configureStore";
import Promise from 'bluebird'

// WOOOOW NO BABEL
module.exports = function createReduxStore(req) {

  const initialState = {
    default: false
  }

  const store = configureStore(initialState);

  return Promise.all([
    // dispatch any other asynchronous actions here
    store.dispatch(() => {
      console.log('asdfasdfasdfasdf')
      return {
        type: 'asdfas'
      }
    })

  ])
  .then(() => store);
}