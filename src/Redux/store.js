import { legacy_createStore as createStore,compose,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {reducer as PassengerCountReducer} from "./PassengerCountReducer/reducer"
import {reducer as AllHotelsReducer} from "./AllHotels/reducer"
const rootreducer=combineReducers({
    passenger:PassengerCountReducer,
    hotels:AllHotelsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))