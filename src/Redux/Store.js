import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Flight/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));