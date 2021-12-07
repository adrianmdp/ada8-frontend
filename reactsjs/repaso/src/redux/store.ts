import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "./reducers";
import thunk from "redux-thunk";

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
    users: usersReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)