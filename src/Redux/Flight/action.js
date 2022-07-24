import { FLIGHT_CONTACT_DATA, GET_ASC_SORT, GET_BEST_SORT, GET_FLIGHT_DATA, GET_FLIGHT_OPTION_FAILURE, GET_FLIGHT_OPTION_REQUEST, GET_FLIGHT_OPTION_SUCCESS, GET_TIME_SORT } from "./actionTypes"
import axios from 'axios'

export const getFlight_OptionRequest = () => {
    return {
        type: GET_FLIGHT_OPTION_REQUEST
    }

}
export const getFlight_OptionSuccess = (payload) => {
    return {
        type: GET_FLIGHT_OPTION_SUCCESS,
        payload,
    }
}
export const getFlight_OptionFailure = () => {
    return {
        type: GET_FLIGHT_OPTION_FAILURE
    }

}

export const getAscSort = () => (dispatch) => {

    dispatch({ type: GET_ASC_SORT });
    console.log("bestbaofaefo")

}

export const getTimeSort = () => (dispatch) => {
    dispatch({ type: GET_TIME_SORT })
}

export const getBestSort = () => (dispatch) => {

    dispatch({ type: GET_BEST_SORT })

}

export const getFlightData = (payload) => {
    console.log(`acton   ${payload} `)
    return {
        type: GET_FLIGHT_DATA,
        payload
    }

}

export const flightContactData = (payload) => {

    return {
        type: FLIGHT_CONTACT_DATA,
        payload
    }
}

export const getFligths = () => async (dispatch) => {
    dispatch(getFlight_OptionRequest());

    try {
        let res = await axios.get("https://bookingcoclone.herokuapp.com/flight");
        let data = await res.data;
        console.log("cfghfgj")
        dispatch(getFlight_OptionSuccess(data));
    }
    catch (e) {
        dispatch(getFlight_OptionFailure());
    }
}