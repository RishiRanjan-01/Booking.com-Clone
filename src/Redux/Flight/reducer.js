import { GET_FLIGHT_OPTION_FAILURE, GET_FLIGHT_OPTION_REQUEST, GET_FLIGHT_OPTION_SUCCESS } from "./actionTypes";


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
                isLoading: true,
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
        default: {
            return state
        }
    }
}