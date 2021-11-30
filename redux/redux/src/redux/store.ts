import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { testReducer } from "./reducers/test";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/users";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  test: testReducer,
  user: userReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
