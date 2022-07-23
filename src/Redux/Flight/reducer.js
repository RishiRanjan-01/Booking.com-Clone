import { loadFlightData, saveFlightDate } from "../../Utils/flightOption/selecteFlight";
import { FLIGHT_CONTACT_DATA, GET_ASC_SORT, GET_BEST_SORT, GET_FLIGHT_DATA, GET_FLIGHT_OPTION_FAILURE, GET_FLIGHT_OPTION_REQUEST, GET_FLIGHT_OPTION_SUCCESS, GET_TIME_SORT } from "./actionTypes";


const inSate = {
    flight: [],
    isLoading: false,
    isError: false,
    localData: [],
    flightData: {}
    // loadFlightData("flightTime") ||

}

export const reducer = (state = inSate, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_FLIGHT_OPTION_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case GET_FLIGHT_OPTION_SUCCESS: {
            return {
                ...state,
                flight: payload,
                isLoading: false,
                isError: false
            }
        }
        case GET_FLIGHT_OPTION_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case GET_ASC_SORT: {
            const ascData = state.flight.sort((a, b) => (a.price - b.price));

            return {
                ...state,
                flight: ascData
            }
        }
        case GET_TIME_SORT: {
            const timeData = state.flight.sort((a, b) => (a.time1 - b.time1));
            console.log(`reducer ${timeData}`)
            return {
                ...state,
                flight: timeData
            }
        }
        case GET_BEST_SORT: {
            const bestSort = state.flight.sort((a, b) => (a.id - b.id));
            console.log(`bestSort ${bestSort}`)
            return {
                ...state,
                flight: bestSort
            }
        }
        case GET_FLIGHT_DATA: {
            const flightData = payload;
            // console.log(`flight time ${flightData} `)
            // saveFlightDate("flightTime", flightData)
            return {
                ...state,
                localData: flightData
            }
        }

        case FLIGHT_CONTACT_DATA: {

            return {
                ...state,
                flightData: payload
            }
        }
        default: {
            return state
        }
    }
}