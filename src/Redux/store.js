import { legacy_createStore as createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reducer as flightReducer } from "./Flight/reducer";
import {reducer as PassengerCountReducer} from "./PassengerCountReducer/reducer"
import {reducer as AllHotelsReducer} from "./AllHotels/reducer";
import { reducer as AuthReducer} from "./Authentication/reducer"

const rootreducer=combineReducers({
    passenger:PassengerCountReducer,
    hotels:AllHotelsReducer,
    flightReducer: flightReducer,
    auth:AuthReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))