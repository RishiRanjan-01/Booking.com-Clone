import { GET_ASC_SORT, GET_FLIGHT_OPTION_FAILURE, GET_FLIGHT_OPTION_REQUEST, GET_FLIGHT_OPTION_SUCCESS, GET_TIME_SORT } from "./actionTypes";


const inSate = {
    flight: [],
    isLoading: false,
    isError: false

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
            console.log(`reducer ${ascData}`)
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
        default: {
            return state
        }
    }
}