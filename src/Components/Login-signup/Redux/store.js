import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux";

import thunk from "redux-thunk";
// import {reducer as AppReducer} from './AppReducer/reducer';
import {reducer as AuthReducer} from './AuthReducer/reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;



const rootReducer=combineReducers({AuthReducer});
const store=legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)))

    export default store;