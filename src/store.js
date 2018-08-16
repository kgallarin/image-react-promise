import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import ReduxLogger from "redux-logger";
import ReduxPromise from "redux-promise-middleware";
import rootReducer from "./reducers/index";

export default () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk, ReduxPromise(), ReduxLogger)
  );
};
