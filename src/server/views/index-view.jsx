//
// This is the server side entry point for the React app.
//

import ReduxRouterEngine from "electrode-redux-router-engine";
import Promise from 'bluebird'
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import { routes } from "../../client/routes";
import configureStore from '../configureStore'
//import rootReducer from "../../client/reducers";

// default store
function createReduxStore(req) {
  const initialState = {
    default: true
  }

  const store = configureStore(initialState);

  return Promise.all([
    // dispatch any other asynchronous actions here
  ])
  .then(() => store);
}

const routesHandlerPath = process.env.APP_SRC_DIR + '/routesHandlers'

module.exports = (req) => {
  const app = req.server && req.server.app || req.app;
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({ routes, createReduxStore, routesHandlerPath });
  }

  return app.routesEngine.render(req);
};
