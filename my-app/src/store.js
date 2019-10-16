import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initalState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
